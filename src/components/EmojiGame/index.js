import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    selectedEmojisList: [],
    score: 0,
    topScore: 0,
    gameStatus: '',
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  isEmojiSelected = emojiId => {
    const {selectedEmojisList} = this.state
    const emojiList = selectedEmojisList.filter(
      eachItem => eachItem.id === emojiId,
    )
    return !(emojiList.length > 0)
  }

  checkAllEmojisSelected = () => {
    const {emojisList} = this.props
    const {selectedEmojisList} = this.state
    return selectedEmojisList.length === emojisList.length
  }

  onClickEmojiCheck = async emojiId => {
    const emojiStatus = this.isEmojiSelected(emojiId)

    if (emojiStatus) {
      const {emojisList} = this.props

      const selectedEmojis = emojisList.filter(
        eachItem => eachItem.id === emojiId,
      )
      const newSelectedEmoji = selectedEmojis[0]

      await this.setState(prevState => ({
        selectedEmojisList: [...prevState.selectedEmojisList, newSelectedEmoji],
        score: prevState.score + 1,
      }))

      const isWon = this.checkAllEmojisSelected()
      if (isWon) {
        this.setState({gameStatus: 'won'})
      }
    } else {
      //   console.log('already selected')
      this.setState({gameStatus: 'lose'})
    }
  }

  onClickPlayAgain = score => {
    console.log('play again')
    this.setState(prevState => ({
      selectedEmojisList: [],
      score: 0,
      topScore: prevState.topScore < score ? score : prevState.topScore,
      gameStatus: '',
    }))
  }

  render() {
    const shuffledEmojisList = this.shuffledEmojisList()
    const {score, topScore, gameStatus} = this.state

    const mainEle = (
      <div className="mainBgContainer">
        <div className="navBgContainer">
          <NavBar score={score} topScore={topScore} gameStatus={gameStatus} />
        </div>

        <div className="gameContainer">
          {gameStatus === 'won' && (
            <WinOrLoseCard
              gameStatus={gameStatus}
              statusImg="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              score={score}
              onClickPlayAgain={this.onClickPlayAgain}
            />
          )}

          {gameStatus === 'lose' && (
            <WinOrLoseCard
              gameStatus={gameStatus}
              statusImg="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              score={score}
              onClickPlayAgain={this.onClickPlayAgain}
            />
          )}

          {gameStatus === '' && (
            <ul className="emojiBgContainer">
              {shuffledEmojisList.map(eachCard => (
                <EmojiCard
                  key={eachCard.id}
                  cardDetails={eachCard}
                  onClickEmojiCheck={this.onClickEmojiCheck}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )

    return mainEle
  }
}

export default EmojiGame

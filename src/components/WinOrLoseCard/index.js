import './index.css'

const WinOrLoseCard = props => {
  const {gameStatus, statusImg, score, onClickPlayAgain} = props

  const totalScore = '12'

  const statusImgAltText = gameStatus === 'won' ? 'win' : 'lose'

  const statusHeaderText = gameStatus === 'won' ? 'You Won' : 'You Lose'

  const scoreDescription = gameStatus === 'won' ? 'Best Score' : 'Score'

  const clickedPlayAgain = () => {
    onClickPlayAgain(score)
  }

  const mainEle = (
    <div className="statusCardContainer">
      <img className="statusImg" src={statusImg} alt={statusImgAltText} />
      <div>
        <h1 className="statusHeader">{statusHeaderText}</h1>
        <p className="scoreDescription">{scoreDescription}</p>
        <p className="score">
          {score}/{totalScore}
        </p>
        <button type="button" className="playBtn" onClick={clickedPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  )

  return mainEle
}

export default WinOrLoseCard

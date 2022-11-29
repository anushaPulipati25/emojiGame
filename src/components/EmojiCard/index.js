import './index.css'

const EmojiCard = props => {
  const {cardDetails, onClickEmojiCheck} = props
  const {id, emojiName, emojiUrl} = cardDetails

  const checkEmoji = () => {
    onClickEmojiCheck(id)
  }

  const mainEle = (
    <li className="cardContainer">
      <button type="button" className="emojiBtn" onClick={checkEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )

  return mainEle
}

export default EmojiCard

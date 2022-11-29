import './index.css'

const NavBar = props => {
  const {score, topScore, gameStatus} = props

  const mainEle = (
    <div className="navContainer">
      <div className="logoContainer">
        <img
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
        />
        <h1 className="gameName">Emoji Game</h1>
      </div>
      {gameStatus === '' && (
        <div className="scoreContainer">
          <p className="scoreText">Score: {score}</p>
          <p className="scoreText">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )

  return mainEle
}
export default NavBar

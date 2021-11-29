import './SingleCard'

function SingleCard({ card, handleChoice }) {
  const handleCardClick = () => {
    handleChoice(card)
  }

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={handleCardClick}
          alt="card back"
        />
      </div>
    </div>
  )
}
export default SingleCard

export function Card({ card }) {
  const colorClassName = card.teamName.toLowerCase().replaceAll(" ", "-");
  const cardClassName = `nba-card ${colorClassName} ${
    card.currentPosition <= 5 ? "top-card" : ""
  }`;

  return (
    <div className={cardClassName}>
      <img className="team-icon" src={card.img} alt="team-icon" />
      <div className="nba-card-content">
        <h2 className="team-card-content-text">Team name:{card.teamName}</h2>
        <h3
          className={`team-card-content-text team-country ${
            card.country == "USA"
              ? "Country:" && card.country && "country-flag-usa"
              : "Country:" && card.country && "country-flag-canada"
          }`}
        >
          Country:{card.country}
        </h3>
        <h3 className="team-card-content-text">City:{card.city}</h3>
        <div className="footer">
          <span className="current-position">
            Seasonal position:{card.currentPosition}
          </span>
          <span className="ticket-price">
            Ticket price: {card.minTicketPrice}$
          </span>

          {card.minPriceForUkr && (
            <span className="champions">
              Price for ukrainians: {card.minPriceForUkr}$
            </span>
          )}

          <span className="team-rate">
            {/* {Fan Rating: {starsRating} {card.fanRate}} */}
          </span>
        </div>
      </div>
    </div>
  );
}

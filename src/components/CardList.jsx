import { cards } from "../data/cards";
import { List } from "./List";
console.log(cards);
export function CardList({ card }) {
  const colorClassName = card.name.toLowerCase().replaceAll(" ", "-");
  const cardClassName = `nba-card ${colorClassName} ${
    card.currentPosition <= 5 ? "top-card" : ""
  }`;

  return (
    <div class={cardClassName}>
      <img className="team-icon" src={card.img} alt="team-icon" />
      <div className="nba-card-content">
        <h2 class="team-card-content-text">Team name:{card.name}</h2>
        <h3
          className={`team-card-content-text team-country ${
            card.country == "USA"
              ? "Country:" && card.country && "country-flag-usa"
              : "Country:" && card.country && "country-flag-canada"
          }`}
        >
          Country:{card.country}
        </h3>
        <h3 class="team-card-content-text">City:{card.city}</h3>
        <div className="footer">
          <span className="current-position">
            Seasonal position:{card.currentPosition}
          </span>
          <span className="ticket-price">Ticket price: {card.minTicketPrice}$</span>
          $
          {card.minPriceForUkr
            && `<span class="champions">Price for ukrainians: ${card.minPriceForUkr}</span>` + "$"
            }
          {card.champions
            && `<span class="champions">Champion rings: ${championRings}</span>`}
          <span className="team-rate">
            {/* {Fan Rating: {starsRating} {card.fanRate}} */}
          </span>
        </div>
      </div>
    </div>
  );
}

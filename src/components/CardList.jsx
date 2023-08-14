import { Card } from "./Card";


export function CardList({cards}) {
  return (
    <div className="nba-list three-clm" id="nba-list">
      {cards.map((card) => (
        <Card card={card} key={card.id}/>
      ))}
    </div>
  );
}

import { CardList } from "./components/CardList";
import { SearchCard } from "./components/SearchCard";
import { SortCards } from "./components/SortCards";
import { cards as cardsData } from "./data/cards";
import "./index.css";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState(cardsData);
  return (
    <main>
      <div className="container content-align">
        <h1 className="nba-title">NBA favorite six</h1>
        <SortCards setCards={setCards} />
        <div className="top-bar">
          <SearchCard setCards={setCards} />
          <div className="tile-actions" id="tile-actions">
            <button className="tile-action" data-action="one-clm">
              &#8801;
            </button>
            <button className="tile-action is-active" data-action="three-clm">
              &#8230;
            </button>
            <button className="tile-action" data-action="compact-card">
              Compact
            </button>
          </div>
        </div>

        <CardList cards={cards} />
      </div>
    </main>
  );
}

export default App;

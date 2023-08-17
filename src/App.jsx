import { useState } from "react";

import { clubs as clubsData } from "./data/cards";

import { CardList } from "./components/CardList";
import { SearchBar } from "./components/SearchBar";
import { SortCards } from "./components/SortCards";

import "./index.css";


function App() {
   const [clubs, setClubs] = useState(clubsData);

  
  return (

    <main>
      <div className="container content-align">
        <h1 className="nba-title">NBA favorite six</h1>

        <SortCards setClubs={setClubs} />

        <div className="top-bar">

          <SearchBar setClubs={setClubs} />

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

        <CardList cards={clubs} />

      </div>
    </main>
  );
}

export default App;

import { CardList } from "./components/CardList";

function App() {
  return (
    <main>
      <div className="container content-align">
        <h1 className="nba-title">NBA favorite six</h1>
        <select name="orderBy" id="sortForm">
          <option value="name/1">Name (A-Z)</option>
          <option value="name/-1">Name (Z-A)</option>
          <option value="city/1">City (A-Z)</option>
          <option value="city/-1">City (Z-A)</option>
          <option value="fanRate/1">Fan Rating (asc)</option>
          <option value="fanRate/-1">Fan Rating (desc)</option>
        </select>
        <div className="top-bar">
          <form className="search-bar" id="search-form">
            <input type="search" name="searchQuery" />
            <button type="submit">Search</button>
          </form>
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

        <div className="nba-list three-clm" id="nba-list">
          <CardList/>
        </div>
      </div>
    </main>
  );
}

export default App;

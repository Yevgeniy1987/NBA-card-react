import { smartSearch } from "../helpers/smartSearch";

export function SearchCard({ setCards }) {
  const handleSearch = (e) => {
    e.preventDefault();

    setCards((cards) => smartSearch(cards));
    
  };
  
  return (
    <form className="search-bar" id="search-form">
      <input type="search" name="searchQuery" />
      <button type="submit" onSubmit={(e) => handleSearch(e)}>
        Search
      </button>
    </form>
  );
}

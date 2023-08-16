import { clubs } from "../data/cards";

export function SearchBar({ setClubs }) {
  const handleSearch = (e) => {
    e.preventDefault();

    const searchQueryString = e.target.searchQuery.value
      .trim()
      .replaceAll(/\s{2,}/g, " ")
      .toLowerCase();

    setClubs(clubs.filter((club) =>
        `${club.teamName} ${club.city} ${club.country}`
          .toLowerCase()
          .includes(searchQueryString)
      )
    );
  };

  return (
    <form className="search-bar" id="search-form" onSubmit={handleSearch}>
      <input type="search" name="searchQuery" />
      <button type="submit">Search</button>
    </form>
  );
}

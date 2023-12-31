import { smartSort } from "../helpers/smartSort.js";

export function SortCards({ setClubs }) {
  const handleSort = (e) => {
    const [key, order] = e.target.value.split("/");

    setClubs((clubs) => smartSort(clubs, key, order));
  };
  return (
    <select name="orderBy" onChange={(e) => handleSort(e)}>
      <option value="teamName/1">Name (A-Z)</option>
      <option value="teamName/-1">Name (Z-A)</option>
      <option value="city/1">City (A-Z)</option>
      <option value="city/-1">City (Z-A)</option>
      <option value="currentPosition/1">Current position (asc)</option>
      <option value="currentPosition/-1">Current position (desc)</option>
    </select>
  );
}

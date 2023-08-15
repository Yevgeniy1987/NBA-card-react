export function smartSearch({cards}){

    const searchQueryString = e.target.searchQuery.value
    .trim()
    .replaceAll(/\s{2,}/g, " ")
    .toLowerCase();

  const filteredCard = cards.filter((card) => {
    return `${card.name} ${card.city} ${card.country}`
      .toLowerCase()
      .includes(searchQueryString);
  });
  return filteredCard
}
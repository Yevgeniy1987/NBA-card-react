export function smartSort(array, key, order = 1) {
  const sortedArray = [...array];

  sortedArray.sort((a, b) => {
    const elem1 = key ? a[key] : a;
    const elem2 = key ? b[key] : b;

    return (
      String(elem1).localeCompare(String(elem2), undefined, { numeric: true }) *
      order
    );
  });
  return sortedArray;
}

export function List({ items, field }) {
  return (
    <>
      {items.map((item) => {
        item[field];
      })}
    </>
  );
}

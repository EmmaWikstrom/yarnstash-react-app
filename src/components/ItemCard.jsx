export function ItemCard({ item, onDeleteItem }) {
  return (
    <div>
      <h3>{item.name}</h3>
      {item.brand && <p>{item.brand}</p>}
      {item.weight && <p>{item.weight}</p>}
      <button onClick={() => onDeleteItem(item.id)}>
        Delete
      </button>
    </div>
  );
}

export function ItemCard({ item, onDeleteItem, onEditItem }) {
  return (
    <div>
      <h3>{item.name}</h3>
      {item.brand && <p>{item.brand}</p>}
      {item.weight && <p>{item.weight}</p>}

      <button type="button" onClick={() => onEditItem(item)}>
        Edit
        </button>

      <button type="button" onClick={() => onDeleteItem(item.id)}>
        Delete
      </button>
    </div>
  );
}

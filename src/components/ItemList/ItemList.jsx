import { ItemCard } from "../ItemCard/ItemCard";

export function ItemList({ items, onDeleteItem, onEditItem }) {
  if (items.length === 0) {
    return <p className="empty-state">Add yarn to see it here</p>;
  }

  return (
    <div className="stash">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          onEditItem={onEditItem}
        />
      ))}
    </div>
  );
}

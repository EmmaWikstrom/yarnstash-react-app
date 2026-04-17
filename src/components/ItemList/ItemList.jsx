// REVIEW: Missing semicolon at end of import (inconsistent with the rest of the codebase).
import { ItemCard } from "../ItemCard/ItemCard";

export function ItemList({ items, onDeleteItem, onEditItem }) {
  // REVIEW: The if-block below has extra indentation (8 spaces instead of the
  // expected 2 or 4). The return statement inside it is also inconsistently indented.
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

import { ItemCard } from "./ItemCard"

export function ItemList({ items, onDeleteItem, onEditItem }) {
    return (
        <div>
            {items.map((item) => (
                <ItemCard 
                    key={item.id}
                    item={item}
                    onDeleteItem={onDeleteItem}
                    onEditItem={onEditItem}
                />
            ))}
        </div>
        
    )
}
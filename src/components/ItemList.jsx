import { ItemCard } from "./ItemCard"

export function ItemList({ items, onDeleteItem, onEditItem }) {

        if (items.length === 0) {
        return <p>No yarns in stash yet</p>
    }
    
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
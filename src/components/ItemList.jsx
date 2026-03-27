export function ItemList({ items, onDeleteItem }) {
    return (
        <div>
            {items.map((item) => (
                <div key={(item.id)}>
                    <h3>{item.name}</h3>
                    {item.brand && <p>{item.brand}</p>}
                    {item.weight && <p>{item.weight}</p>}
                    <button onClick={() => onDeleteItem(item.id)}>Delete</button>
                </div>
            ))}
        </div>
        
    )
}
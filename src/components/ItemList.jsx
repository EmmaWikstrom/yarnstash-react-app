export function ItemList({ items }) {
    return (
        <div>
            {items.map((item) => (
                <div key={(item.id)}>
                    <h3>{item.name}</h3>
                    <p>{item.brand}</p>
                    <p>{item.weight}</p>
                </div>
            ))}
        </div>
        
    )
}
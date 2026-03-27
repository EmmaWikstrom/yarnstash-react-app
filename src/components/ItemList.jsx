export function ItemList({ items }) {
    return (
        <div>
            {items.map((item) => (
                <div key={(item.id)}>
                    <h3>{item.name}</h3>
                    {item.brand && <p>{item.brand}</p>}
                    {item.weight && <p>{item.weight}</p>}
                </div>
            ))}
        </div>
        
    )
}
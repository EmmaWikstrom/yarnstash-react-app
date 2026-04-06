import { Link } from "react-router-dom";

export function ItemCard({ item, onDeleteItem, onEditItem }) {
  return (
    <article className="yarn-card">
      <h3>{item.name}</h3>
      <dl className="yarn-details">
        {item.brand && (
          <div className="detail-row">
            <dt>Brand</dt>
            <dd>{item.brand}</dd>
          </div>
        )}

        {item.weight && (
          <div className="detail-row">
            <dt>Weight</dt>
            <dd>{item.weight}</dd>
          </div>
        )}
      </dl>

      <div className="card-actions">
        <Link to={`/yarns/${item.id}`}>View details</Link>
        <button
          type="button"
          className="secondary-button"
          onClick={() => onEditItem(item)}
        >
          Edit
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={() => onDeleteItem(item.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

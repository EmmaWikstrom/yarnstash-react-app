import { useState, useEffect } from "react";

export function ItemForm({
  onAddItem,
  onUpdateItem,
  onCancelEdit,
  setMessage,
  editingItem,
  message,
}) {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setBrand(editingItem.brand || "");
      setWeight(editingItem.weight || "");
    }
  }, [editingItem]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setMessage("Name is required");
      return;
    }

    const itemData = {
      id: editingItem ? editingItem.id : Date.now(),
      name,
      brand,
      weight,
    };

    if (editingItem) {
      onUpdateItem(itemData);
    } else {
      onAddItem(itemData);
    }

    setName("");
    setBrand("");
    setWeight("");
  };

  return (
    <>
      <h2>{editingItem ? "Edit yarn" : "Add new yarn"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          if (message === "Name is required") {
              setMessage("");
            }
          }}
        />
        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
        />
        <input
          type="text"
          placeholder="Weight"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
        <div className="form-actions">
          <p className={`message ${message ? "is-visible" : ""}`}>
            {message || "\u00A0"}
          </p>
          <button type="submit">{editingItem ? "Update" : "Add"}</button>
          {editingItem && (
            <button
              type="button"
              className="secondary-button"
              onClick={() => {
                setName("");
                setBrand("");
                setWeight("");
                onCancelEdit();
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </>
  );
}

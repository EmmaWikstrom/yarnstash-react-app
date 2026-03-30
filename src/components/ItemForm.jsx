import { useState, useEffect } from "react";

export function ItemForm({ onAddItem, onUpdateItem, onCancelEdit, editingItem }) {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [weight, setWeight] = useState(""); 

  useEffect(() => {
    if (editingItem) { 
        setName(editingItem.name);
        setBrand(editingItem.brand || "");
        setWeight(editingItem.weight || "");
    }
  }, [editingItem])

  const handleSubmit = (event) => {
    event.preventDefault();

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
        onChange={(event) => setName(event.target.value)}
        required
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
      <button type="submit" disabled={!name.trim()}>
        {editingItem ? "Update yarn" : "Add" }
      </button>
      {editingItem && (
        <button type="button" onClick={() => {
            setName("");
            setBrand("");
            setWeight("");
            onCancelEdit();
            }}>
            Cancel
        </button>
      )}
    </form>
    </>
  );
}

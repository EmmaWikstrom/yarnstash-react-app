import { useState, useEffect } from "react";

export function ItemForm({ onAddItem, editingItem }) {
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

    const newItem = {
      id: Date.now(),
      name, 
      brand, 
      weight,
    };

    onAddItem(newItem);
    setName("");
    setBrand("");
    setWeight("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Yarn name"
        value={name}
        onChange={(event) => setName(event.target.value)}
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
      <button type="submit">Add item</button>
    </form>
  );
}

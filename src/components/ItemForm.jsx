import { useState } from "react";

export function ItemForm({ onAddItem }) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: Date.now(),
      name: name,
    };

    onAddItem(newItem);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Yarn name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit">Add item</button>
    </form>
  );
}

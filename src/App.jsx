import "./App.css";
import { useState } from "react";
import { ItemList } from "./components/ItemList";
import { ItemForm } from "./components/ItemForm";

export function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Soft Merino",
      brand: "Drops",
      weight: "DK",
    },
  ]);
  const [message, setMessage] = useState("");
  const [editingItem, setEditingItem] = useState(null);

    const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
    setMessage(`Added ${newItem.name} to stash!`);
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
  };

  const handleUpdateItem = (updatedItem) => {
    setItems(
      items.map((item) => 
        (item.id === updatedItem.id ? updatedItem : item))
    );
    setEditingItem(null);
    setMessage(`Updated ${updatedItem.name}!`);
  };

  const handleDeleteItem = (id) => {
    const deletedItem = items.find((item) => item.id === id);

    setItems(items.filter((item) => item.id !== id));
    setMessage(`Removed ${deletedItem.name} from stash!`);
  };

  return (
    <>
      <h1>Yarn stash</h1>
      {message && <p>{message}</p>}
      <ItemForm
        onAddItem={handleAddItem}
        onUpdateItem={handleUpdateItem}
        onCancelEdit={() => setEditingItem(null)}
        editingItem={editingItem}
      />
      <ItemList
        items={items}
        onDeleteItem={handleDeleteItem}
        onEditItem={handleEditItem}
      />
    </>
  );
}

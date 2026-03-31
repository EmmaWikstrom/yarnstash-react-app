import "./App.css";
import { useState, useEffect } from "react";
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

  const [editingItem, setEditingItem] = useState(null);
  const [message, setMessage] = useState("");
  
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

  useEffect (() => { 
    if (message) {
        const timer = setTimeout(() => {
            setMessage("");
        }, 2000);

        return () => clearTimeout(timer);
    }
  }, [message])

  return (
    <>
      <header className="site-header">
        <div className="container">
          <h1>Yarn stash</h1>
          <p>Keep track of what is in the cupboard</p>
          {message && <p className="message">{message}</p>}
        </div>
      </header>
      <main className="container">
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
      </main>
    </>
  );
}

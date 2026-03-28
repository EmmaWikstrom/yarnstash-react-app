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
    }
  ]);

  const [editingItem, setEditingItem] = useState(null);

  const handleEditItem = (item) => {
    setEditingItem(item);
  }

  const handleAddItem = (newItem) => {
    setItems([...items, newItem])
  }; 

  const handleDeleteItem = (id) => {
    setItems(items.filter((item => item.id !== id)));
  }

  return (
    <>
      <h1>Yarn stash</h1>
      <ItemForm 
      onAddItem={handleAddItem}
      editingItem={editingItem}
      />
      <ItemList items={items} 
      onDeleteItem={handleDeleteItem}
      onEditItem={handleEditItem}
      />

    </>
  )
}



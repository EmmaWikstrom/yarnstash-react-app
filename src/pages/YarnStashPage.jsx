import { useState, useEffect } from "react";
import { ItemList } from "../components/ItemList/ItemList";
import { ItemForm } from "../components/ItemForm/ItemForm";

export function YarnStashPage() {
  const [items, setItems] = useState([]);
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
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item)),
    );
    setEditingItem(null);
    setMessage(`Updated ${updatedItem.name}!`);
  };

  const handleDeleteItem = (id) => {
    const deletedItem = items.find((item) => item.id === id);

    const isConfirmed = window.confirm(
      `Are you sure you want to remove ${deletedItem.name} from stash?`,
    );

    if (!isConfirmed) {
      return;
    }
    setItems(items.filter((item) => item.id !== id));
    setMessage(`Removed ${deletedItem.name} from stash!`);
  };

  useEffect(() => {
    const fetchYarns = async () => {
      try {
        const response = await fetch(
          "https://knitting-api.onrender.com/api/yarns",
        );
        const data = await response.json();

        const formattedData = data.map((item) => ({
          ...item,
          id: item._id,
        }));

        setItems(formattedData);
      } catch (error) {
        console.error("Error fetching yarns:", error);
      }
    };
    fetchYarns();
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      <main className="container">
        <section>
          <h2>Yarn stash</h2>
          <p>Keep your yarn untangled and easy to find</p>
        </section>
        <ItemForm
          onAddItem={handleAddItem}
          onUpdateItem={handleUpdateItem}
          onCancelEdit={() => setEditingItem(null)}
          setMessage={setMessage}
          editingItem={editingItem}
          message={message}
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

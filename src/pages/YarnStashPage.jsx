import { getAllYarns } from "../services/yarnService";
import { useState, useEffect } from "react";
import { ItemList } from "../components/ItemList/ItemList";
import { ItemForm } from "../components/ItemForm/ItemForm";

export function YarnStashPage() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [message, setMessage] = useState("");

  const handleAddItem = (newItem) => {
    const localItem = {
      ...newItem,
      isLocal: true,
    };
    const nextItems = [...items, localItem];

    setItems(nextItems);

    const localItems = nextItems.filter((item) => item.isLocal);
    localStorage.setItem("yarnStash", JSON.stringify(localItems));

    setMessage(`Added ${newItem.name} to stash!`);
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
  };

  const handleUpdateItem = (updatedItem) => {
    const nextItems = items.map((item) =>
      item.id === updatedItem.id ? { ...item, ...updatedItem } : item,
    );

    setItems(nextItems);
    const localItems = nextItems.filter((item) => item.isLocal);
    localStorage.setItem("yarnStash", JSON.stringify(localItems));

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

    const nextItems = items.filter((item) => item.id !== id);

    setItems(nextItems);

    const localItems = nextItems.filter((item) => item.isLocal);
    localStorage.setItem("yarnStash", JSON.stringify(localItems));

    setMessage(`Removed ${deletedItem.name} from stash!`);
  };

  useEffect(() => {
    const fetchYarns = async () => {
      try {
        const apiYarns = await getAllYarns();

        const saved = localStorage.getItem("yarnStash");

        let storedYarns = [];

        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            storedYarns = Array.isArray(parsed) ? parsed : [];
          } catch {
            storedYarns = [];
          }
        }

        setItems([...apiYarns, ...storedYarns]);
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

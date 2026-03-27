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
  return (
    <>
      <h1>Yarn stash</h1>
      <ItemForm />
      <ItemList items={items}/>

    </>
  )
}



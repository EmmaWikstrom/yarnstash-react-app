import { useState, useEffect } from "react";

export function ItemForm({
  onAddItem,
  onUpdateItem,
  onCancelEdit,
  setMessage,
  editingItem,
  message,
}) {
  // REVIEW: Consider adding label elements (<label>) for each input to improve
  // accessibility. Screen readers currently have no way to associate the inputs
  // with a description; only placeholder text is used.
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

    // REVIEW: setMessage is not passed as a prop when this form is used from
    // YarnDetailsPage, so calling setMessage here will throw "setMessage is not
    // a function". Either provide a default (e.g., setMessage = () => {}) via
    // a default parameter, or pass setMessage from YarnDetailsPage as well.
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
        {/* REVIEW: The message prop is also undefined when used from YarnDetailsPage,
            so the ternary `message ? "is-visible" : ""` will always be falsy. This
            won't crash, but the validation message ("Name is required") will never
            appear on that page. */}
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

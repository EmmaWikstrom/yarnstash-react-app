import { getYarnById } from "../services/yarnService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemForm } from "../components/ItemForm/ItemForm";

export function YarnDetailsPage() {
  const { id } = useParams();

  const [yarn, setYarn] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // REVIEW: The useEffect and handleUpdateYarn below have inconsistent indentation —
  // they are at column 0 instead of being indented inside the component function body.
  // All code inside the component should be indented one level (2 spaces) for consistency.
  useEffect(() => {
    const fetchYarn = async () => {
      try {
        setErrorMessage("");

        const savedYarnsRaw = localStorage.getItem("yarnStash");
        let storedYarns = [];

        if (savedYarnsRaw) {
          try {
            const parsed = JSON.parse(savedYarnsRaw);
            storedYarns = Array.isArray(parsed) ? parsed : [];
          } catch {
            storedYarns = [];
          }
        }

        const localYarn = storedYarns.find((item) => String(item.id) === id);

        if (localYarn) {
          setYarn(localYarn);
          return;
        }

        const data = await getYarnById(id);
        setYarn(data);
      } catch (error) {
        console.error("Error fetching yarn details:", error);
        setErrorMessage("Error fetching yarn details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchYarn();
  }, [id]);

  // REVIEW: When editing an API yarn (isLocal is false), the update is only saved in
  // component state. On page refresh the edit is lost. Consider persisting API yarn
  // edits via a PUT/PATCH request or saving them to localStorage as well.
  const handleUpdateYarn = (updatedYarn) => {
    const nextYarn = { ...yarn, ...updatedYarn };

    setYarn(nextYarn);

    if (nextYarn.isLocal) {
      const savedYarnsRaw = localStorage.getItem("yarnStash");
      let storedYarns = [];

      if (savedYarnsRaw) {
        try {
          const parsed = JSON.parse(savedYarnsRaw);
          storedYarns = Array.isArray(parsed) ? parsed : [];
        } catch {
          storedYarns = [];
        }
      }

      const nextStoredYarns = storedYarns.map((item) =>
        String(item.id) === String(nextYarn.id) ? nextYarn : item,
      );

      localStorage.setItem("yarnStash", JSON.stringify(nextStoredYarns));
    }

    setIsEditing(false);
  };

  // REVIEW: The loading and "Yarn not found" returns below render a bare <p> without
  // the "container" class, so they won't be centered like the rest of the page.
  // Wrap them in <main className="container"> for consistent layout.
  if (loading) {
    return <p>Loading yarn details...</p>;
  }

  if (errorMessage) {
    return (
      <main>
        <p>{errorMessage}</p>
      </main>
    );
  }
  if (!yarn) {
    return <p>Yarn not found.</p>;
  }

  return (
    <main className="container">
      {isEditing ? (
        <>
          <ItemForm
            editingItem={yarn}
            onUpdateItem={handleUpdateYarn}
            onCancelEdit={() => setIsEditing(false)}
          />
        </>
      ) : (
        <>
          {/* REVIEW: The {" "} below is a stray whitespace expression that adds an
              unnecessary text node before the heading. It can be removed. */}{" "}
          <h2>{yarn.name}</h2>
          <p>Brand: {yarn.brand}</p>
          <p>Weight: {yarn.weight}</p>
          <p>Fiber: {yarn.fiber}</p>
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}
    </main>
  );
}

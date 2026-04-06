import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemForm } from "../components/ItemForm/ItemForm";

export function YarnDetailsPage() {
  const { id } = useParams();

  const [yarn, setYarn] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchYarn = async () => {
      try {
        setErrorMessage("");

        const response = await fetch(
          `https://knitting-api.onrender.com/api/yarns/${id}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch yarn details");
        }

        const data = await response.json();
        setYarn({ ...data, id: data._id });
      } catch (error) {
        console.error("Error fetching yarn details:", error);
        setErrorMessage("Error fetching yarn details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchYarn();
  }, [id]);

  const handleUpdateYarn = (updatedYarn) => {
    setYarn(updatedYarn);
    setIsEditing(false);
  };

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
          {" "}
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

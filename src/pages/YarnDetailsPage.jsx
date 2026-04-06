import { useParams } from "react-router-dom";
import { use, useEffect, useState } from "react";   

export function YarnDetailsPage() {
  const { id } = useParams();

  const [yarn, setYarn] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchYarn = async () => {
        try {
            const response = await fetch(`https://knitting-api.onrender.com/api/yarns/${id}`);
            const data = await response.json();
            
            setYarn({...data, id: data._id,});
        } catch (error) {
            console.error("Error fetching yarn details:", error);
        } finally {
            setLoading(false);
        }
    }
    fetchYarn();
}, [id]);

if (loading) {
    return <p>Loading yarn details...</p>;
}

if (!yarn) {
    return <p>Yarn not found.</p>;
}

  return (
  <main className="container">
    <h2>{yarn.name}</h2>
    <p>Brand: {yarn.brand}</p>
    <p>Weight: {yarn.weight}</p>
    <p>Fiber: {yarn.fiber}</p>
  </main>
  );
}

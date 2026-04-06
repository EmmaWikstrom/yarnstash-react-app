import { useParams } from "react-router-dom";

export function YarnDetailsPage() {
  const { id } = useParams();

  return (
    <main className="container">
      <h1>Yarn details</h1>
      <p>Details for yarn with id: {id}</p>
    </main>
  );
}

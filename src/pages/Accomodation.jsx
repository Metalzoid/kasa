import { useParams } from "react-router";
import Header from "../components/header/Header";
import { useAccomodations } from "../hooks/useAccomodations";
import NotFound from "./NotFound";

export default function Accomodation() {
  const { id } = useParams();
  const { loading, findAccommodationById } = useAccomodations();

  const accommodation = !loading ? findAccommodationById(id) : null;

  if (loading) {
    return (
      <>
        <Header />
        <div className="loading-container">
          <p>Chargement de l'hébergement...</p>
        </div>
      </>
    );
  }

  if (!accommodation) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <div className="accommodation-details">
        <h1>{accommodation.title}</h1>
        <p>ID: {accommodation.id}</p>
        {/* Ajoutez ici les autres détails de l'accommodation */}
      </div>
    </>
  );
}

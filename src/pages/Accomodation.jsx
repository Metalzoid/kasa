import { useParams } from "react-router";
import Bottom from "../components/bottom/Bottom";
import Carousel from "../components/carousel/Carousel";
import Header from "../components/header/Header";
import { useAccomodations } from "../hooks/useAccomodations";
import NotFound from "./NotFound";
import AccomodationDetails from "../components/accomodation_details/AccomodationDetails";

export default function Accomodation() {
  const { id } = useParams();
  const { loading, findAccommodationById } = useAccomodations();

  const accommodation = !loading ? findAccommodationById(id) : null;

  if (loading) {
    return (
      <>
        <Header />
        <main>
          <div className="loading-container">
            <p>Chargement de l'hébergement...</p>
          </div>
        </main>
        <Bottom />
      </>
    );
  }

  if (!accommodation) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <main>
        <div>
          <Carousel
            pictures={accommodation.pictures}
            description={accommodation.description}
          />
          <AccomodationDetails accomodation={accommodation} />
        </div>
      </main>
      <Bottom />
    </>
  );
}

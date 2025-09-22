import { Link } from "react-router";
import wallpaper2 from "../assets/images/wallpaper2.png";
import Bottom from "../components/bottom/Bottom";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import { useAccomodations } from "../hooks/useAccomodations";

export default function Home() {
  const { loading, accomodations } = useAccomodations();

  const accomodationsList = !loading
    ? accomodations.map((accomodation) => (
        <li key={accomodation.id}>
          <Link to={`/${accomodation.id}`}>{accomodation.title}</Link>
        </li>
      ))
    : null;

  return (
    <>
      <Header />
      <Hero
        title="Chez vous, partout et ailleurs"
        image={wallpaper2}
        brightness="40%"
      />
      <main>
        <h1>Home</h1>
        <ul>{accomodationsList}</ul>
      </main>
      <Bottom />
    </>
  );
}

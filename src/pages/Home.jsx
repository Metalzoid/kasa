import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import wallpaper2 from "../assets/images/wallpaper2.png";
import { useAccomodations } from "../hooks/useAccomodations";
import { Link } from "react-router";

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
      <h1>Home</h1>
      <ul>{accomodationsList}</ul>
    </>
  );
}

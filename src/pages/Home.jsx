import wallpaper2 from "../assets/images/wallpaper2.png";
import Bottom from "../components/bottom/Bottom";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import AccomodationList from "../components/accomodations_list/AccomodationsList";

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        title="Chez vous, partout et ailleurs"
        image={wallpaper2}
        brightness="40%"
      />
      <main>
        <AccomodationList />
      </main>
      <Bottom />
    </>
  );
}

import wallpaper1 from "../assets/images/wallpaper1.png";
import Bottom from "../components/bottom/Bottom";
import Dropdown from "../components/dropdown/Dropdown";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import { useAboutItems } from "../hooks/useAboutItems";

export default function About() {
  const { loading, error, aboutItems } = useAboutItems();

  return (
    <>
      <Header />
      <Hero title="" image={wallpaper1} brightness="70%" />
      <main>
        <div className="dropdowns">
          {loading && <div>Chargement...</div>}
          {error && <div>Erreur: {error}</div>}
          {!loading &&
            !error &&
            aboutItems.map((dropdown) => {
              return (
                <Dropdown
                  key={dropdown.title}
                  title={dropdown.title}
                  content={dropdown.content}
                />
              );
            })}
        </div>
      </main>
      <Bottom />
    </>
  );
}

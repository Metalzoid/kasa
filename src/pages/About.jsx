import wallpaper1 from "../assets/images/wallpaper1.png";
import Bottom from "../components/bottom/Bottom";
import Dropdown from "../components/dropdown/Dropdown";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

export default function About() {
  const dropdowns = [
    {
      title: "Fiabilité",
      content:
        "Les annonces de Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons a ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires,soit empreinte de respect et de bienveillance.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux normes de sécurité établies par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vétifier que nos standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];
  return (
    <>
      <Header />
      <Hero title="" image={wallpaper1} brightness="70%" />
      <main>
        <div className="dropdowns">
          {dropdowns.map((dropdown) => {
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

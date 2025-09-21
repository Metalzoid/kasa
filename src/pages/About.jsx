import wallpaper1 from "../assets/images/wallpaper1.png";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

export default function About() {
  return (
    <>
      <Header />
      <Hero title="" image={wallpaper1} brightness="70%" />
      <h1>About</h1>
    </>
  );
}

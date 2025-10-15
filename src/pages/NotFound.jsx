import Bottom from "@/components/bottom/Bottom";
import Header from "@/components/header/Header";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="notFound">
        <h1 className="notFound__title">404</h1>
        <h6 className="notFound__subtitle">
          Oups! La page que vous demandez n'existe pas.
        </h6>
        <Link to="/" className="notFound__link">
          Retourner sur la page d'accueil
        </Link>
      </main>
      <Bottom />
    </>
  );
}

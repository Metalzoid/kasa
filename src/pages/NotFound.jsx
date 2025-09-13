import Header from "../components/header/Header";

export default function NotFound(props) {
  return (
    <>
      <Header links={props.links} />
      <h1>404</h1>
    </>
  );
}

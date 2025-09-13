import Header from "../components/header/Header";

export default function About(props) {
  return (
    <>
      <Header links={props.links} />
      <h1>About</h1>
    </>
  );
}

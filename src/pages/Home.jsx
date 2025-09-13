import Header from "../components/header/Header";

export default function Home(props) {
  return (
    <>
      <Header links={props.links} />
      <h1>Home</h1>
    </>
  );
}

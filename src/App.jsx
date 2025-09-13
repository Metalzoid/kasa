import { useState } from "react";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const [links, _setLinks] = useState([
    { to: "/", label: "Accueil" },
    { to: "/about", label: "A propos" },
  ]);
  return (
    <Routes>
      <Route path="/" element={<Home links={links} />} />
      <Route path="/about" element={<About links={links} />} />
      <Route path="*" element={<NotFound links={links} />} />
    </Routes>
  );
}

export default App;

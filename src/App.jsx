import { Route, Routes } from "react-router";
import { useAccomodations } from "./hooks/useAccomodations.js";
import About from "./pages/About";
import Accomodation from "./pages/Accomodation";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const context = useAccomodations();
  window.debugContext = context;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/:id" element={<Accomodation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

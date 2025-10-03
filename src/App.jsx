import { Route, Routes } from "react-router";
import About from "./pages/About";
import Accomodation from "./pages/Accomodation";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { AboutItemsProvider } from "./context/AboutItemsContext";

function App() {
  return (
    <AboutItemsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/:id" element={<Accomodation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AboutItemsProvider>
  );
}

export default App;

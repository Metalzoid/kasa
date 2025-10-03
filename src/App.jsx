import { Route, Routes } from "react-router";
import { DataProvider } from "./context/DataContext";
import About from "./pages/About";
import Accomodation from "./pages/Accomodation";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/:id" element={<Accomodation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DataProvider>
  );
}

export default App;

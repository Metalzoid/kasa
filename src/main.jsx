import "@/styles/index.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import { AccomodationProvider } from "./context/AccomodationContext.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AccomodationProvider>
      <App />
    </AccomodationProvider>
  </BrowserRouter>
);

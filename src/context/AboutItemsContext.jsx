import { createContext, useEffect, useState } from "react";
import { fetcher } from "../services/fetcher";

const AboutItemsContext = createContext();

export const AboutItemsProvider = ({ children }) => {
  const [aboutItems, setAboutItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadAboutItems = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetcher.fetch(
        "src/data/about_items.json"
      );
      setAboutItems(data);
    } catch (err) {
      setError(err.message);
      console.error("Erreur dans AboutItemsContext:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAboutItems();
  }, []);

  return (
    <AboutItemsContext.Provider
      value={{
        aboutItems,
        loading,
        error
      }}
    >
      {children}
    </AboutItemsContext.Provider>
  );
};

export { AboutItemsContext };

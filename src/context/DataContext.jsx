import { createContext, useEffect, useState } from "react";
import { fetcher } from "../services/fetcher";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [aboutItems, setAboutItems] = useState([]);
  const [accomodations, setAccomodations] = useState([]);
  const [aboutLoading, setAboutLoading] = useState(true);
  const [accomodationsLoading, setAccomodationsLoading] = useState(true);
  const [aboutError, setAboutError] = useState(null);
  const [accomodationsError, setAccomodationsError] = useState(null);

  const loadAboutItems = async () => {
    try {
      setAboutLoading(true);
      setAboutError(null);

      const data = await fetcher.fetch("src/data/about_items.json");
      setAboutItems(data);
    } catch (err) {
      setAboutError(err.message);
      console.error("Erreur lors du chargement des about items:", err);
    } finally {
      setAboutLoading(false);
    }
  };

  const loadAccomodations = async () => {
    try {
      setAccomodationsLoading(true);
      setAccomodationsError(null);

      const data = await fetcher.fetch("src/data/accomodations.json");
      setAccomodations(data);
    } catch (err) {
      setAccomodationsError(err.message);
      console.error("Erreur lors du chargement des accommodations:", err);
    } finally {
      setAccomodationsLoading(false);
    }
  };

  const findAccommodationById = (id) => {
    return accomodations.find((acc) => acc.id === id);
  };

  useEffect(() => {
    loadAboutItems();
    loadAccomodations();
  }, []);

  return (
    <DataContext.Provider
      value={{
        aboutItems,
        aboutLoading,
        aboutError,
        accomodations,
        accomodationsLoading,
        accomodationsError,
        findAccommodationById,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext };

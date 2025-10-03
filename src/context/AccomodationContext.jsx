import { createContext, useEffect, useState } from "react";
import { fetcher } from "../services/fetcher";

const AccomodationContext = createContext();

export const AccomodationProvider = ({ children }) => {
  const [accomodations, setAccomodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadAccommodations = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetcher.fetch(
        "src/data/accomodations.json"
      );
      setAccomodations(data);
    } catch (err) {
      setError(err.message);
      console.error("Erreur dans AccomodationContext:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAccommodations();
  }, []);

  const findAccommodationById = (id) => {
    const result = accomodations.find((acc) => {
      return acc.id === id;
    });

    return result;
  };

  return (
    <AccomodationContext.Provider
      value={{
        accomodations,
        loading,
        error,
        findAccommodationById,
      }}
    >
      {children}
    </AccomodationContext.Provider>
  );
};

export { AccomodationContext };

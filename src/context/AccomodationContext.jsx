import { createContext, useEffect, useState } from "react";
import data from "../data/data.json";

const AccomodationContext = createContext();

export const AccomodationProvider = ({ children }) => {
  const [accomodations, setAccomodations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAccomodations(data);
    setLoading(false);
  }, []);

  // Fonction pour rechercher un hébergement par ID
  const findAccommodationById = (id) => {
    return accomodations.find((acc) => acc.id === id);
  };

  return (
    <AccomodationContext.Provider
      value={{
        accomodations,
        loading,
        findAccommodationById,
      }}
    >
      {children}
    </AccomodationContext.Provider>
  );
};

export { AccomodationContext };

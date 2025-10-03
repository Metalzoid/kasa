import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const useAccomodations = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useAccomodations must be used within a DataProvider");
  }
  return {
    accomodations: context.accomodations,
    loading: context.accomodationsLoading,
    error: context.accomodationsError,
    findAccommodationById: context.findAccommodationById,
  };
};

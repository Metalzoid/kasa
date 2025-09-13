import { useContext } from "react";
import { AccomodationContext } from "../context/AccomodationContext.jsx";

export const useAccomodations = () => {
  const context = useContext(AccomodationContext);
  if (!context) {
    throw new Error(
      "useAccomodations must be used within an AccomodationProvider"
    );
  }
  return context;
};

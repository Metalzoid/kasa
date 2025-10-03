import { useContext } from "react";
import { AboutItemsContext } from "../context/AboutItemsContext";

export const useAboutItems = () => {
  const context = useContext(AboutItemsContext);
  if (!context) {
    throw new Error(
      "useAboutItems must be used within an AboutItemsProvider"
    );
  }
  return context;
};

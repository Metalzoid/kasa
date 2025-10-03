import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const useAboutItems = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useAboutItems must be used within a DataProvider");
  }
  return {
    aboutItems: context.aboutItems,
    loading: context.aboutLoading,
    error: context.aboutError,
  };
};

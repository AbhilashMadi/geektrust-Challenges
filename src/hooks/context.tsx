import { useContext } from "react";
import { appContext } from "@/context/AppContext";

export const useData = () => {
  const context = useContext(appContext);

  if (context === undefined) {
    throw new Error("DataContext is only avialable inside AppContext")
  }

  return context;
}
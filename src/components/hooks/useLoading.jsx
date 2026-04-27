import { useContext } from "react";
import { LoadingContext } from "../../contexts/LoadingContext";

export const useLoading = () => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error("useLoading harus dipakai di dalam LoadingProvider");
  }

  return context;
};

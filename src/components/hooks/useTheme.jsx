import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme harus dipakai di dalam ThemeProvider");
  }
  return context;
};

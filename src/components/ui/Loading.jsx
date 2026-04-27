import React from "react";
import { useLoading } from "../hooks/useLoading";

const Loading = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/50">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-foreground/10 border-t-accent" />
    </div>
  );
};
export default Loading;

import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-4 space-y-4">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default MainLayout;

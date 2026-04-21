import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-y-6 items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <Link
        to="/"
        className="shadow w-fit text-white font-semibold py-2 px-4 bg-accent transition-colors hover:bg-primary"
      >
        Kembali ke Halaman Utama
      </Link>
    </div>
  );
};

export default NotFound;

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="shadow flex justify-between items-center py-4 px-6 bg-white">
      <Link to="/" className="text-2xl font-bold">
        Note App
      </Link>
      <Link
        to={pathname === "/" ? "/archives" : "/"}
        className="font-medium shadow bg-foreground text-white py-1 px-4"
      >
        {pathname === "/" ? "Arsip" : "Catatan Aktif"}
      </Link>
    </nav>
  );
};

export default Navbar;

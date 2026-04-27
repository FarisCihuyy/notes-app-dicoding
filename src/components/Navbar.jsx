import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="relative shadow flex justify-between items-center py-4 px-6 bg-white">
      {user && (
        <h3 className="absolute left-1/2 -translate-x-1/2 text-xl font-medium">
          🧑‍🦲{user.name}
        </h3>
      )}
      <Link to="/" className="text-2xl font-bold">
        Note App
      </Link>
      <div className="flex gap-x-4 items-center">
        <Link
          to={pathname === "/" ? "/archives" : "/"}
          className=" font-medium shadow py-1 px-4 text-sm"
        >
          {pathname === "/" ? "Arsip" : "Catatan Aktif"}
        </Link>

        <Button
          handleClick={handleLogout}
          label="Logout"
          variant="outline"
          size="sm"
        />
      </div>
    </nav>
  );
};

export default Navbar;

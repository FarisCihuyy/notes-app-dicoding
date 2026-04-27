import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "./hooks/useTheme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
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
        <button
          className="rounded-md p-1 transition-colors cursor-pointer hover:bg-accent/10"
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌑" : "☀️"}
        </button>

        <Link
          to={pathname === "/" ? "/archives" : "/"}
          className="font-medium hover:underline"
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

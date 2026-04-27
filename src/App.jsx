import { Route, Routes } from "react-router-dom";
import Archives from "./pages/archives";
import NoteDetail from "./pages/notes/NoteDetail";
import NewNote from "./pages/notes/new";
import Home from "./pages/home";
import NotFound from "./pages/NotFound";
import MainLayout from "./layout/MainLayout";
import { useState } from "react";
import { notes as data } from "./utils/local-data";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import { LoadingProvider } from "./contexts/LoadingContext";
import Loading from "./components/ui/Loading";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [notes, setNotes] = useState(data || []);

  return (
    <>
      <Loading />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Home notes={notes} />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route
              path="/archives"
              element={<Archives notes={notes} setNotes={setNotes} />}
            />
          </Route>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/notes/new" element={<NewNote />} />
          <Route path="/notes/:id" element={<NoteDetail />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

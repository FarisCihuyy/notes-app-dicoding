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
import { LoadingProvider } from "./contexts/loadingContext";

const App = () => {
  const [notes, setNotes] = useState(data || []);

  return (
    <LoadingProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<Home notes={notes} setNotes={setNotes} />}
          />
          <Route
            path="/archives"
            element={<Archives notes={notes} setNotes={setNotes} />}
          />
        </Route>

        <Route path="/notes/:id" element={<NoteDetail />} />
        <Route path="/notes/new" element={<NewNote />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LoadingProvider>
  );
};

export default App;

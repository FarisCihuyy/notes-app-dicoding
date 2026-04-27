/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import NotesPage from "../components/NotesPage";
import { archiveNote, getActiveNotes } from "../services/notes";
import { useAuth } from "../contexts/AuthContext";
import { useLoading } from "../components/hooks/useLoading";

const Home = () => {
  const { token } = useAuth();
  const { showLoading, hideLoading } = useLoading();
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const res = await getActiveNotes(token);

    if (res.error) {
      alert(res.message);
      return;
    }

    setNotes(res.data);
  };

  const handleArchiveNote = async (id) => {
    showLoading();
    try {
      const res = await archiveNote(token, id);
      if (res.error) {
        alert(res.message);
        return;
      }

      await getNotes();
    } finally {
      hideLoading();
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <NotesPage
      notes={notes}
      refreshNotes={getNotes}
      toggleArchiveNote={handleArchiveNote}
    />
  );
};

export default Home;

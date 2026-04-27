/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import NotesPage from "../components/NotesPage";
import { useAuth } from "../contexts/AuthContext";
import { getArchivedNotes, unArchiveNote } from "../services/notes";
import { useLoading } from "../components/hooks/useLoading";

const Archives = () => {
  const { token } = useAuth();
  const { showLoading, hideLoading } = useLoading();
  const [notes, setNotes] = useState([]);

  const archivedNotes = async () => {
    const res = await getArchivedNotes(token);

    if (res.error) {
      alert(res.message);
      return;
    }

    setNotes(res.data);
  };

  const handleUnArchiveNote = async (id) => {
    showLoading();

    const res = await unArchiveNote(token, id);

    if (res.error) {
      alert(res.message);
      return;
    }

    await archivedNotes();
    hideLoading();
  };

  useEffect(() => {
    archivedNotes();
  }, []);

  return (
    <NotesPage
      notes={notes}
      refreshNotes={archivedNotes}
      toggleArchiveNote={handleUnArchiveNote}
    />
  );
};

export default Archives;

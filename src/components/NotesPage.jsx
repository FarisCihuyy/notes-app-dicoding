import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { archiveNote, deleteNote } from "../services/notes";
import { useAuth } from "../contexts/AuthContext";
import { useLoading } from "./hooks/useLoading";
// import { toggleArchiveNote } from "../utils";

const NotesPage = ({ notes, refreshNotes }) => {
  const { token } = useAuth();
  const { showLoading, hideLoading } = useLoading();
  const [searchParams, setSearchParams] = useSearchParams();
  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate();

  // const filteredNotes = getFilteredNotes(notes, keywords, archived);

  const handleSearchNote = (e) => {
    setSearchParams({ keywords: e.target.value });
  };

  const handleToggle = async (id) => {
    showLoading();
    try {
      const res = await archiveNote(token, id);
      if (res.error) {
        alert(res.message);
        return;
      }

      alert(res.message || "Catatan berhasil disimpan!");
      await refreshNotes();
    } finally {
      hideLoading();
    }
  };

  const handleDelete = async (id) => {
    showLoading();
    try {
      const res = await deleteNote(token, id);
      if (res.error) {
        alert(res.message);
        return;
      }

      alert(res.message || "Catatan berhasil dihapus!");
      await refreshNotes();
    } finally {
      hideLoading();
    }
  };

  useEffect(() => {
    const keywordFromUrl = searchParams.get("keywords") || "";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setKeywords(keywordFromUrl);
  }, [searchParams]);

  return (
    <div className="space-y-4">
      <div className="flex gap-x-4">
        <Input
          type="text"
          name="keywords"
          value={keywords}
          placeholder="Cari berdasarkan judul..."
          onChange={handleSearchNote}
          className="w-full"
        />

        <Button
          label="+ Catatan Baru"
          variant="solid"
          className="w-40"
          handleClick={() => navigate("/notes/new")}
        />
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {notes.length > 0 ? (
          notes.map((note) => (
            <Card key={note.id}>
              <Card.Header
                id={note.id}
                title={note.title}
                createdAt={note.createdAt}
              />
              <Card.Body body={note.body} />
              <Card.Footer
                id={note.id}
                archived={note.archived}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            </Card>
          ))
        ) : (
          <p className="col-span-1 sm:col-span-2 md:col-span-3 min-h-20 flex items-center justify-center text-xl opacity-75">
            Tidak ada catatan yang ditemukan
          </p>
        )}
      </section>
    </div>
  );
};

export default NotesPage;

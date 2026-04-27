import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { createNote } from "../../services/notes";
import { useAuth } from "../../contexts/AuthContext";

const NewNote = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title")?.trim();
    const body = formData.get("body")?.trim();

    if (!title) {
      alert("Judul tidak boleh kosong!");
      return;
    }

    if (!body) {
      alert("Isi catatan tidak boleh kosong!");
      return;
    }

    if (title.length > 50) {
      alert("Judul maksimal 50 karakter!");
      return;
    }

    const res = await createNote(token, { title, body });

    if (res.error) {
      alert(res.message);
      return;
    }

    alert("Catatan berhasil disimpan!");
    e.target.reset();
    navigate("/");
  };

  return (
    <main className="max-w-2xl w-full mx-auto py-12 space-y-4 px-4">
      <Link
        to="/"
        className="inline-block py-1.5 px-4 shadow bg-white font-semibold"
      >
        &larr; Kembali
      </Link>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="title"
          placeholder="Judul"
          className="w-full"
        />

        <textarea
          name="body"
          placeholder="Tulis catatanmu disini..."
          className="w-full shadow bg-white py-2 px-4"
          rows="10"
        />

        <Button label="Tambahkan" type="submit" className="w-full" />
      </form>
    </main>
  );
};
export default NewNote;

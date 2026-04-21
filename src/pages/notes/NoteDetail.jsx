import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { notes as data } from "../../utils/local-data";
import { formatDate } from "../../utils";

const NoteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({});

  useEffect(() => {
    const note = data.find((note) => note.id === id);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNote(note);
  }, [id]);

  if (!id) navigate("/not-found");

  return (
    <main className="max-w-2xl w-full mx-auto py-12 space-y-4">
      <Link
        to="/"
        className="inline-block  py-1.5 px-4 shadow bg-white font-semibold"
      >
        &larr; Kembali
      </Link>

      <section className="shadow bg-white">
        <div className="p-4">
          <h1 className="text-3xl font-bold">{note.title}</h1>
          <time className="text-xs font-light">
            {formatDate(note.createdAt)}
          </time>
        </div>
        <div className="p-4">
          <p>{note.body}</p>
        </div>
      </section>
    </main>
  );
};

export default NoteDetail;

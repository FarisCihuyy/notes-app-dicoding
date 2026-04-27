import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { formatDate } from "../../utils";
import { useAuth } from "../../contexts/AuthContext";
import { getSingleNote } from "../../services/notes";

const NoteDetail = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const from = useLocation().state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [note, setNote] = useState({});

  const getNote = async () => {
    const res = await getSingleNote(token, id);

    if (res.error) {
      navigate("/not-found");
      return;
    }

    setNote(res.data);
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getNote();
  }, []);

  return (
    <main className="max-w-2xl w-full mx-auto py-12 space-y-4">
      <Link
        to={from}
        onClick={handleBack}
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

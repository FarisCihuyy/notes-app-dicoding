/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import NotesPage from "../components/NotesPage";
import { getActiveNotes } from "../services/notes";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { token } = useAuth();
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const res = await getActiveNotes(token);

    console.log(res.data);

    if (res.error) {
      alert(res.message);
      return;
    }

    setNotes(res.data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  return <NotesPage notes={notes} refreshNotes={getNotes} />;
  // return <h1>hllo world</h1>;
};

export default Home;

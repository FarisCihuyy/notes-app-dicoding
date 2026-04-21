import NotesPage from "../components/NotesPage";

const Archives = ({ notes, setNotes }) => {
  return <NotesPage archived={true} notes={notes} setNotes={setNotes} />;
};

export default Archives;

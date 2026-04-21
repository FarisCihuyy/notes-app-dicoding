import NotesPage from "../components/NotesPage";

const Home = ({ notes, setNotes }) => {
  return <NotesPage archived={false} notes={notes} setNotes={setNotes} />;
};

export default Home;

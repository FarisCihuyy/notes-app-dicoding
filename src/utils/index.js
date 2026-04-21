import { notes as data } from "./local-data";

export const formatDate = (date) => {
  const d = new Date(date);

  const day = d.toLocaleDateString("id-ID", { weekday: "long" });
  const dd = d.getDate();
  const month = d.toLocaleDateString("id-ID", { month: "long" }).toLowerCase();
  const year = d.getFullYear();

  return `${day}, ${dd} ${month} ${year}`;
};

export const toggleArchiveNote = (id, data) => {
  return data.map((note) =>
    note.id === id ? { ...note, archived: !note.archived } : note,
  );
};

export const addNote = (title, body) => {
  const id = +new Date();

  const newNote = {
    id: id.toString().slice(0, 8),
    title,
    body,
    createdAt: new Date().toISOString(),
    archived: false,
  };
  data.push(newNote);
};

export const getFilteredNotes = (notes, keywords, archived) => {
  return notes
    .filter((note) => note.archived === archived)
    .filter((note) =>
      note.title.toLowerCase().includes(keywords.toLowerCase()),
    );
};

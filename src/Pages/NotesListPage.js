import React from "react";
import notes from "../Assets/data";
import ListItem from "../components/ListItem";

const NotesListPage = () => {
  return (
    <div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesListPage;

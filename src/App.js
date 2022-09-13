import "./App.css";
import { Header } from "./components/Header";
import React from "react";

import NotesListPage from "./Pages/NotesListPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Note from "./Pages/Note";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<NotesListPage />} />
          <Route path="/note/:id" element={<Note />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

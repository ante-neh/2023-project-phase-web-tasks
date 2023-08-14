import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NotesList from './NotesList';
import AddNote from './AddNote';
// import UpdateNote from './updateNote';

const App = () => {

  return (
    <NotesList/>
  );
};

export default App;


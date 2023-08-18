import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import NotesList from './NotesList';
import AddNote from './AddNote';
import UpdateNote from './updateNote';


const App = () => {
  <nav>
    <Link to = "/">update</Link>
    <Link to = "/add">update</Link>
    <Link to = "/update/:id">update</Link>
  </nav>
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<NotesList/>}/>
        <Route exact Path="/add" element={<AddNote/>}/>
        <Route exact path="/update/:id" element={<UpdateNote />} />
      </Routes>
    </Router>
  );
};

export default App;


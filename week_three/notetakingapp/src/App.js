import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import NotesList from './NotesList';
import AddNote from './AddNote';
import UpdateNote from './updateNote';


const App = () => {

  return (
    <Router>
          <Link to="/"> Home </Link>
          <Link to="/add"> Add </Link>
          <Link to="/update:id"> Update </Link>

      <Routes>
        <Route exact path='/' element={<NotesList/>}/>
        <Route exact Path='/add' element={<AddNote/>}/>
        <Route exact path='/update' element={<UpdateNote/>}/>
      </Routes>
    </Router>
  );
};

export default App;


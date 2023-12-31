import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote,} from './features/notes/noteSlice';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';


const NotesList = () => {
  const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  const handleUpdateNote=(id)=>{
    navigate(`/update/${id}`)
  }


  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Notes List</h2>
      <AddNote/>
      {notes.length === 0 ? (
        <p>No notes found.</p>
      ) : (
        notes.map(note => (
          <div key={note.id} className="mb-4 p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
            <p className="text-gray-600">{note.content}</p>
            <div className="mt-2">
              <button
                onClick={() => handleDeleteNote(note.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
        
              <button 
              onClick = {()=>handleUpdateNote(note.id)}
              className="px-3 ml-5 py-1 bg-blue-500 text-white rounded mr-2"
              >
                  Update
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;


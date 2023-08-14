import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateNote } from './features/notes/noteSlice';

const UpdateNote = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);
  const note = notes.find(note => note.id === id);

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleUpdateNote = () => {
    if (title && content) {
      dispatch(updateNote({ id, title, content }));
      
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Update Note</h2>
      
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 rounded border border-gray-300"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mb-2 rounded border border-gray-300"
        />
        <button
          onClick={handleUpdateNote}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Update Note
        </button>
      </div>
    </div>
  );
};

export default UpdateNote;

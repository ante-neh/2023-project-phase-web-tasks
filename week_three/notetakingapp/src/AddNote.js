import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from './features/notes/noteSlice'; // Import your Redux action creator


const AddNote = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    if (title && content) {
      const id = new Date().toISOString();

      dispatch(addNote({ id, title, content }));

      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="p-4">
      <h2 data-testid="addnote" className="text-2xl font-bold mb-4">Add a New Note</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <input
          data-testid="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 rounded border border-gray-300"
        />
        <textarea
          data-testid="content"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mb-2 rounded border border-gray-300"
        />
        <button
          onClick={handleAddNote}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Note
        </button>
      </div>
    </div>
  );
};

export default AddNote;

import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    updateNote: (state, action) => {
      const { id, title, content } = action.payload;
      const existingNote = state.find(note => note.id === id);
      if (existingNote) {
        existingNote.title = title;
        existingNote.content = content;
      }
    },
    deleteNote: (state, action) => {
      const idToDelete = action.payload;
      return state.filter(note => note.id !== idToDelete);
    },

  },
});

export const { addNote, updateNote, deleteNote } = noteSlice.actions;

export default noteSlice.reducer;


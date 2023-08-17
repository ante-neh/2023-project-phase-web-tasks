import { createSlice } from '@reduxjs/toolkit';
import { addNote, updateNote, deleteNote } from './noteSlice';

const initialState = [];

const testStore = createStore(noteSlice.reducer, initialState);

it('should add a note', () => {
  const note = {
    id: 1,
    title: 'My first note',
    content: 'This is my first note.',
  };

  testStore.dispatch(addNote(note));

  const notes = testStore.getState().notes;
  expect(notes).toEqual([note]);
});

it('should update a note', () => {
  const note = {
    id: 1,
    title: 'My first note',
    content: 'This is my first note.',
  };

  testStore.dispatch(addNote(note));

  const updatedNote = {
    id: 1,
    title: 'My updated note',
    content: 'This is my updated note.',
  };

  testStore.dispatch(updateNote(updatedNote));

  const notes = testStore.getState().notes;
  expect(notes).toEqual([updatedNote]);
});

it('should delete a note', () => {
  const note = {
    id: 1,
    title: 'My first note',
    content: 'This is my first note.',
  };

  testStore.dispatch(addNote(note));

  testStore.dispatch(deleteNote(note.id));

  const notes = testStore.getState().notes;
  expect(notes).toEqual([]);
});

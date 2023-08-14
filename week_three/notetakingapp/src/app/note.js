
import { configureStore } from '@reduxjs/toolkit';
import noteReducer from  "../features/notes/noteSlice" // Import your note reducer

const store = configureStore({
  reducer: {
    notes: noteReducer,
    // Add other reducers here if needed
  },
});

export default store;

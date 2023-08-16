import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/PostsSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;

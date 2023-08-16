import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';
const initialState = {
  posts: [],
  totalPosts:0,
  loading: false,
  error: null,
};

// Define an async action to fetch posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ({ page = 1, searchTerm = '' }) => {
  try {
    const response = await api.get(`/posts?_page=${page}&_limit=10&q=${searchTerm}`);
    const totalPosts = parseInt(response.headers['x-total-count']);
    return {posts:response.data, totalPosts};
  } catch (error) {
    throw new Error('Error fetching posts');
  }
});

// Create a slice for posts management
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Define a reducer to save posts
    savePosts: (state, action) => {
      state.posts = action.payload.posts;
      state.totalPosts = action.payload.totalPosts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.posts;
        state.totalPosts = action.payload.totalPosts;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const { savePosts } = postsSlice.actions;
export default postsSlice.reducer;

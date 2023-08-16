// src/components/PostList.test.js

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';
import postsReducer from '../features/postsSlice';
import PostList from './PostList';

const store = createStore({
  reducer: {
    posts: postsReducer,
  },
});

test('renders loading indicator when loading', () => {
    
  // Mock the loading state
  store.dispatch.posts.loading = true;

  const { getByText } = render(
    <Provider store={store}>
      <PostList />
    </Provider>
  );

  const loadingIndicator = getByText(/Loading.../i);
  expect(loadingIndicator).toBeInTheDocument();
});

test('renders error message when there is an error', () => {
  // Mock the error state
  store.dispatch.posts.error = 'An error occurred';

  const { getByText } = render(
    <Provider store={store}>
      <PostList />
    </Provider>
  );

  const errorMessage = getByText(/An error occurred/i);
  expect(errorMessage).toBeInTheDocument();
});

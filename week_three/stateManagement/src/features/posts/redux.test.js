// src/redux.test.js

import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { createMemoryHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from '../../app/store'; 
import { fetchPosts } from './PostsSlice'; 

describe('Redux State Management', () => {
  let store;

  beforeEach(() => {
    const history = createMemoryHistory();
    const middleware = [thunk, routerMiddleware(history)];
    store = createStore(rootReducer(history), applyMiddleware(...middleware));
  });

  test('fetchPosts action works correctly', async () => {
    await store.dispatch(fetchPosts());
    const state = store.getState();
    expect(state.posts.posts).toHaveLength(10);
  });

});

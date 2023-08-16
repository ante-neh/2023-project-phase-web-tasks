import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPosts } from '../features/posts/PostsSlice';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import store from '../app/store'

function PostList() {
    const dispatch = useDispatch();
    const { posts, loading, error, totalPosts } = useSelector((state) => state.posts);
    const location = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const currentPage = Number(queryParams.get('page')) || 1;
    const searchTerm = queryParams.get('q') || '';
    const postsPerPage = 10; // Number of posts per page
    const totalPages = Math.ceil(totalPosts / postsPerPage);
  
    useEffect(() => {
      dispatch(fetchPosts({ page: currentPage, searchTerm }));
    }, [dispatch, currentPage, searchTerm]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mt-6">
      <Provider store={store}>
      <SearchBar/>
      </Provider>
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-200 rounded-md shadow-md p-4 mb-4 mx-auto max-w-3xl mt-5">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="mt-2">{post.body}</p>
        </div>
      ))}
      <Provider store={store}>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
      </Provider>     
    </div>
  );
}

export default PostList;
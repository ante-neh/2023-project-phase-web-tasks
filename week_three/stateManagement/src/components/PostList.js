import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/PostsSlice';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import { useParams, useLocation } from 'react-router-dom'; // Use useLocation here

function PostList() {
  const dispatch = useDispatch();
  const { posts, loading, error, totalPosts } = useSelector((state) => state.posts);
  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search);
  const currentPage = Number(queryParams.get('page')) || 1;
  const { page } = useParams(); 
  const searchTerm = queryParams.get('q') || '';
  const postsPerPage = 10; 
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  console.log(page)


  useEffect(() => {
    dispatch(fetchPosts({ page: Number(page), searchTerm })); // Convert page to number
  }, [dispatch, page, searchTerm]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mt-6">
      <SearchBar />
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-200 rounded-md shadow-md p-4 mb-4 mx-auto max-w-3xl mt-5">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="mt-2">{post.body}</p>
        </div>
      ))}
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  );
}

export default PostList;

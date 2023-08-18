import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Pagination({ currentPage, totalPages }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const current_Page = Number(queryParams.get('page')) || 1;

  return (
    <div className="flex justify-center mt-6">
      <nav className="inline-flex">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <Link
            key={page}
           to={`/${page}?page=${page}`}
            className={`px-3 py-2 rounded-full mx-1 ${
              current_Page === page
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700'
            }`}
          >
            {page}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Pagination;

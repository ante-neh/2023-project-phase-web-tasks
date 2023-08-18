// src/components/SearchBar.js

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function SearchBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('q', searchTerm);
    navigate(`/?${queryParams.toString()}`);
  };

  return (
    <div className="flex justify-center mt-6">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

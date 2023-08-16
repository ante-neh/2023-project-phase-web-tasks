import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 focus:bg-gray-700 focus:text-white rounded-md px-4 py-2 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/add"
                  className="text-gray-300 focus:bg-gray-700 focus:text-white rounded-md px-4 py-2 text-sm font-medium"
                >
                  Add Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

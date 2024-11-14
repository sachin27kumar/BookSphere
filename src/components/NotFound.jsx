import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NotFound() {
  const err = useRouteError();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-3xl shadow-2xl max-w-lg w-full">
        {/* Error Icon */}
        <div className="text-6xl text-blue-500 mb-4">
          <span>❌</span>
        </div>

        {/* Error Status */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">{`Oops! Error ${err.status}`}</h2>
        
        {/* Error Description */}
        <p className="text-lg text-gray-600 mb-6">{err.data || 'Something went wrong. Please try again later.'}</p>
        
        {/* Back to Home Button */}
        <Link to="/">
          <button className="px-8 py-3  text-white rounded-full shadow-lg bg-gradient-to-r from-indigo-600 to-purple-500 focus:outline-none transition duration-300 transform hover:scale-105">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

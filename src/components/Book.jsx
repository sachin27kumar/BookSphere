import React from 'react';
import { Link } from 'react-router-dom';

function Book(props) {
  return (
    <div className="w-60 h-72 rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-110 hover:shadow-2xl">
      <img
        src={props.BookDetails.imageLink}
        alt="book_img"
        className="w-full h-36 object-fill transform transition duration-300 hover:scale-105"
      />
      <div className="p-3">
        {/* Book Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{props.BookDetails.title}</h3>

        {/* Book Author */}
        <h4 className="text-sm text-gray-600 mb-1">{`Author: ${props.BookDetails.author}`}</h4>

        {/* Book Category */}
        <p className="text-xs text-gray-500 mb-2">{`Category: ${props.BookDetails.category}`}</p>

        {/* Link to Book Details */}
        <div className='text-center mt-5'>
        <Link to={`/book/${props.BookDetails.id}`}>
          <button className="w-4/5 bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-1 px-2 rounded-full text-sm font-medium shadow-md hover:scale-105 transition duration-300">
            View Details
          </button>
        </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Book;
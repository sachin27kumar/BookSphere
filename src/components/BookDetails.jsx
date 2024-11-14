import React from 'react';
import { Books } from '../utiles/mockData';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function BookDetails() {
    const { id } = useParams();
    const book = Books.find((book) => book.id == id);

    // Determine the rating color based on rating value
    const ratingColor = book.rating >= 4 ? 'text-green-500' : 'text-orange-500';

    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-100 to-indigo-200 py-10">
            {/* Book Image and Details Container */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-3/4 sm:w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 transform transition duration-500 hover:scale-105">
                {/* Book Image */}
                <img src={book.imageLink} alt="book_img" className="w-full h-80 object-fill" />
                <div className="p-6">
                    {/* Book Title */}
                    <h3 className="text-2xl font-bold text-gray-800">{`Title: ${book.title}`}</h3>
                    {/* Book Author */}
                    <h4 className="text-lg text-gray-600 mt-2">{`Author: ${book.author}`}</h4>
                    {/* Rating with Conditional Color */}
                    <p className={`${ratingColor} font-semibold mt-2`}>{`Rating: ${book.rating}/5`}</p>
                    {/* Description */}
                    <p className="text-gray-700 mt-4 leading-relaxed">{book.description}</p>
                    {/* Back Button */}
                    <Link to="/browsebooks" className="mt-6 inline-block">
                        <button className="px-6 py-2 w-full md:w-auto bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105">
                            Back to Browse
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;

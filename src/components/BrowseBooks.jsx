import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import { filterData } from '../utiles/filterData';

function BrowseBooks() {
  const books = useSelector((state) => state.books.list); // Redux state
  const [categoryBooks, setCategoryBooks] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const results = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) &&
        (categoryBooks === "All" || book.category === categoryBooks)
    );
    setFilteredBooks(results);
  }, [searchQuery, categoryBooks, books]); // Rerun on searchQuery, categoryBooks, or books change

  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen p-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Browse Books</h2>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search book by Title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-3/4 md:w-1/2 p-2 rounded-lg border border-indigo-500 focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {filterData.map((data) => (
          <button
            key={data.id}
            onClick={() => setCategoryBooks(data.title)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ${
              categoryBooks === data.title
                ? "bg-indigo-600 text-white"
                : "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-100"
            }`}
          >
            {data.title}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-20">
        {filteredBooks.map((book) => (
          <div key={book.id}>
            <Book BookDetails={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;

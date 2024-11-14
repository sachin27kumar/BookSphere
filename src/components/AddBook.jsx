import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../utiles/bookSlice';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [bookDetails, setBookDetails] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...bookDetails, id: Date.now() }));
    navigate('/browsebooks');
  };

  return (
    <div className="flex justify-center items-center min-w-full min-h-screen  bg-gradient-to-r from-indigo-200 to-purple-200">
        <div className="w-1/2 bg-white p-6 rounded-lg  shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={bookDetails.title}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Author</label>
          <input
            type="text"
            name="author"
            value={bookDetails.author}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Book Image Link</label>
          <input
            type="text"
            name="imageLink"
            value={bookDetails.imageLink}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Category</label>
          <input
            type="text"
            name="category"
            value={bookDetails.category}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Description</label>
          <textarea
            name="description"
            value={bookDetails.description}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-2 rounded hover:scale-105 transition duration-300"
        >
          Add Book
        </button>
  
        
      </form>
        </div>
    </div>
    
  );
}

export default AddBook;

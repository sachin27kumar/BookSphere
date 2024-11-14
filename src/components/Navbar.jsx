import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 p-4 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                <Link 
                    to="/" 
                    className="text-white text-3xl font-bold transition duration-300 hover:text-yellow-300 hover:scale-105"
                >
                    Book Sphere
                </Link>

                <div className="flex md:hidden ">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <FontAwesomeIcon icon={faBars} className="text-2xl"/> 
                    </button>
                </div>

                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="text-white font-semibold text-xl transition duration-300 hover:text-yellow-300 hover:scale-105">Home</Link>
                    <Link to="/browsebooks" className="text-white font-semibold text-xl transition duration-300 hover:text-yellow-300 hover:scale-105">Browse Books</Link>
                    <Link to="/addbook" className="text-white font-semibold text-xl transition duration-300 hover:text-yellow-300 hover:scale-105">Add Book</Link>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden mt-4 bg-purple-600 rounded-lg shadow-lg">
                    <Link 
                        to="/" 
                        className="block px-4 py-2 text-white transition duration-300 hover:text-yellow-300 hover:bg-purple-700 hover:scale-105 hover:shadow-xl"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/browsebooks" 
                        className="block px-4 py-2 text-white transition duration-300 hover:text-yellow-300 hover:bg-purple-700 hover:scale-105 hover:shadow-xl"
                    >
                        Browse Books
                    </Link>
                    <Link 
                        to="/addbook" 
                        className="block px-4 py-2 text-white transition duration-300 hover:text-yellow-300 hover:bg-purple-700 hover:scale-105 hover:shadow-xl"
                    >
                        Add Book
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;

import PopularBooks from "./PopularBooks";
import { Books } from "../utiles/mockData";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-200 to-purple-200 min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-14 px-6 text-slate-700">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Book Sphere
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Step into a world of stories and ideas. Browse through our diverse
          categories and uncover books that inspire and entertain.
        </p>
        <Link
          to="/browsebooks"
          className="inline-block bg-gradient-to-r from-indigo-400 to-purple-300 text-lg text-gray-800 font-semibold py-3 px-6 rounded-lg hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl transform "
        >
          Start Browsing
        </Link>
      </div>

      {/* Book Categories Section */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Book Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-3">
          {/* Fiction Button */}
          <Link to="/browsebooks">
            <button className="ml-10 w-3/4 p-5 text-xl text-gray-800 font-semibold bg-gradient-to-r from-indigo-400 to-purple-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              Fiction
            </button>
          </Link>

          {/* Non-Fiction Button */}
          <Link to="/browsebooks">
            <button className="ml-10 w-3/4 p-5 text-xl text-gray-800 font-semibold bg-gradient-to-r from-indigo-400 to-purple-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              Non-Fiction
            </button>
          </Link>

          {/* Sci-Fi Button */}
          <Link to="/browsebooks">
            <button className="ml-10 w-3/4 p-5 text-xl text-gray-800 font-semibold bg-gradient-to-r from-indigo-400 to-purple-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              Sci-Fi
            </button>
          </Link>
        </div>
      </div>

      {/* Popular Books Section */}
      <div className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Popular Books
        </h2>
        <PopularBooks BooksData={Books} />
      </div>
    </div>
  );
}

export default Home;

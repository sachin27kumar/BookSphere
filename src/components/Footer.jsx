import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h3 className="text-2xl font-bold">Book Sphere</h3>
            <p className="text-sm mt-2">Explore the world of books, anytime, anywhere.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div className="mb-6 sm:mb-0">
              <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
              <ul>
                <li><a href="/" className="hover:text-gray-400">About Us</a></li>
                <li><a href="/" className="hover:text-gray-400">Contact</a></li>
                <li><a href="/" className="hover:text-gray-400">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="mb-6 sm:mb-0">
              <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
              <div className="flex gap-4 justify-center sm:justify-start">
                <a href="/" className="text-xl hover:text-gray-400">Facebook</a>
                <a href="" className="text-xl hover:text-gray-400">Twitter</a>
                <a href="" className="text-xl hover:text-gray-400">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Book Sphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

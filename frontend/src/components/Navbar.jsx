import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Train, Bus, Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-navy-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gold-500 p-2 rounded-lg">
                <Train className="h-6 w-6 text-navy-900" />
              </div>
              <span className="font-display font-bold text-xl tracking-wide">SBRB</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
            <Link to="/search" className="hover:text-gold-500 transition-colors">Search Trains</Link>
            <Link to="/search" className="hover:text-gold-500 transition-colors">Search Buses</Link>
            <Link to="/dashboard/customer" className="hover:text-gold-500 transition-colors">My Bookings</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="hover:text-gold-500 transition-colors">Login</Link>
            <Link to="/register" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium py-2 px-4 rounded-lg transition-colors">Sign Up</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-800 pb-4 px-4">
          <div className="flex flex-col space-y-4 pt-2">
            <Link to="/" className="hover:text-gold-500">Home</Link>
            <Link to="/search" className="hover:text-gold-500">Search Trains</Link>
            <Link to="/search" className="hover:text-gold-500">Search Buses</Link>
            <Link to="/login" className="hover:text-gold-500">Login</Link>
            <Link to="/register" className="text-gold-500">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

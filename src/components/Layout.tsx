import React from 'react';
import { motion } from 'framer-motion';
import { Link, Outlet } from 'react-router-dom';
import { Ticket as Cricket, Menu, X, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, isAdmin } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2" /> +1 234 567 890
              </span>
              <span className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2" /> info@crickettournament.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-400" />
              <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-400" />
              <Instagram className="w-4 h-4 cursor-pointer hover:text-pink-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Cricket className="h-10 w-10 text-vafa" />
                <span className="font-bold text-2xl">Cricket Tournament</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-vafa font-semibold">Home</Link>
              <Link to="/teams" className="text-gray-700 hover:text-vafa font-semibold">Teams</Link>
              <Link to="/schedule" className="text-gray-700 hover:text-vafa font-semibold">Schedule</Link>
              <Link to="/news" className="text-gray-700 hover:text-vafa font-semibold">News</Link>
              {isAdmin && (
                <Link to="/admin" className="text-gray-700 hover:text-vafa font-semibold">Admin</Link>
              )}
              {!user ? (
                <Link
                  to="/login"
                  className="bg-gradient-to-r from-vafa to-wafa text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Login
                </Link>
              ) : (
                <button className="text-gray-700 hover:text-vafa font-semibold">Logout</button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-vafa"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-vafa font-semibold"
              >
                Home
              </Link>
              <Link
                to="/teams"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-vafa font-semibold"
              >
                Teams
              </Link>
              <Link
                to="/schedule"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-vafa font-semibold"
              >
                Schedule
              </Link>
              <Link
                to="/news"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-vafa font-semibold"
              >
                News
              </Link>
              {isAdmin && (
                <Link
                  to="/admin"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:text-vafa font-semibold"
                >
                  Admin
                </Link>
              )}
              {!user ? (
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md bg-gradient-to-r from-vafa to-wafa text-white font-semibold"
                >
                  Login
                </Link>
              ) : (
                <button className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-vafa font-semibold">
                  Logout
                </button>
              )}
            </div>
          </motion.div>
        )}
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Cricket className="h-8 w-8 text-white" />
                <span className="font-bold text-xl">Cricket Tournament</span>
              </div>
              <p className="text-gray-400">
                Experience the excitement of cricket with VAFA and WAFA teams competing
                for glory in this prestigious tournament.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
                </li>
                <li>
                  <Link to="/teams" className="text-gray-400 hover:text-white">Teams</Link>
                </li>
                <li>
                  <Link to="/schedule" className="text-gray-400 hover:text-white">Schedule</Link>
                </li>
                <li>
                  <Link to="/news" className="text-gray-400 hover:text-white">News</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span className="text-gray-400">+1 234 567 890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span className="text-gray-400">info@crickettournament.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to get the latest news and updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-full w-full focus:outline-none focus:ring-2 focus:ring-vafa"
                />
                <button className="bg-vafa hover:bg-vafa-dark px-6 py-2 rounded-r-full transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Cricket Tournament. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Project from './pages/Project';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-sans p-8">
        {/* Navbar */}
        <nav className="flex justify-between items-center mb-8">
          <h1 className="text-xl md:text-2xl font-bold flex items-center">
            <img src="/paul.jpeg" alt="Profile" className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-3" />
            Paul Elisha
            <span className="hidden sm:inline text-xs md:text-sm font-normal text-gray-500 ml-2">(Software Engineer)</span>
          </h1>
          
          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-gray-600">
            <Link to="/" className="hover:text-black">Home</Link>
            <Link to="/about" className="hover:text-black">About</Link>
            <Link to="/Articles" className="hover:text-black">Articles</Link>
            <Link to="/project" className="hover:text-black">Projects</Link>
          </div>
          <span className="bg-gray-200 text-xs py-1 px-3 rounded-lg cursor-pointer">CONNECT WALLET</span>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden space-y-4 text-gray-600 text-center mb-4">
            <Link to="/" className="block hover:text-black" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/about" className="block hover:text-black" onClick={toggleMobileMenu}>About</Link>
            <Link to="/Articles" className="block hover:text-black" onClick={toggleMobileMenu}>Articles</Link>
            <Link to="/project" className="block hover:text-black" onClick={toggleMobileMenu}>Projects</Link>
            <span className="block bg-gray-200 text-xs py-1 px-3 rounded-lg cursor-pointer">CONNECT WALLET</span>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

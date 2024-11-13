// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-sans p-8">
        {/* Navbar */}
        <nav className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold flex items-center">
            <img src="/paul.jpeg" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
            Paul Elisha
            <span className="text-sm font-normal text-gray-500 ml-2">(Software Engineer )</span>
          </h1>
          <div className="space-x-6 text-gray-600">
            <Link to="/" className="hover:text-black">Home</Link>
            <Link to="/about" className="hover:text-black">About</Link>
            <Link to="/Articles" className="hover:text-black">Articles</Link>
            <Link to="/project" className="hover:text-black">Projects</Link>
          </div>
          <span className="bg-gray-200 text-xs py-1 px-3 rounded-lg cursor-pointer">CONNECT WALLET.</span>
        </nav>

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

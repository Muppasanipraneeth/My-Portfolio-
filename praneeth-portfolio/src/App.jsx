import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home'; // Correct import
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <nav className="bg-opacity-80 bg-blue-600 p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Madiga Praneeth</h1>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link></li>
              <li><Link to="/projects" className="hover:text-gray-300 transition duration-300">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300 transition duration-300">Contact</Link></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

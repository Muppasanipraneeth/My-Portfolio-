
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Opensource from './components/Opensource';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
        <nav className="backdrop-blur-md bg-gray-900/50 border-b border-gray-800 p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold glow-text bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Madiga Praneeth
            </h1>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors duration-300">Projects</Link></li>
              <li><Link to="/opensource" className="hover:text-blue-400 transition-colors duration-300">OpenSource</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/opensource" element={<Opensource/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
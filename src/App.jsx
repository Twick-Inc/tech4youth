import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Programs from './pages/Programs';
import BlogPage from './pages/BlogPage';
import BlogDetails from './pages/BlogDetails';
import TeamPage from './pages/TeamPage';
import TeamMemberDetails from './pages/TeamMemberDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team/:id" element={<TeamMemberDetails />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Routes,
} from 'react-router-dom';
import Books from './router/Books';
import Categories from './router/Categories';
import logo from './images/logo.svg';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-link">Books</Link>
            </li>
            <li>
              <Link to="/categories" className="nav-link">Categories</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<div>If page not found it goes here</div>} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import logo from '../images/logo.svg';
import '../styles/NavigationComponent.css';

const NavigationBar = () => (
  <div className="navbar">
    <div className="navbar-left">
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
    <Link to="/login" className="login-link">
      <AiOutlineUser size={32} />
    </Link>
  </div>
);

export default NavigationBar;

/* import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import '../styles/NavigationComponent.css';

const NavigationComponents = () => (
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
);

export default NavigationComponents;
 */

import React ,{useState}from 'react';
import { NavLink } from 'react-router-dom';
import navLogo from '../Assets/Navlogo.png';
import './Navbar.css';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav">
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav>
        <img src={navLogo} alt="" />
        <h1>Sahil Mehta</h1>
      <ul className={`nav-bar ${isMenuOpen ? 'hidden' : ''}`}>
        <li>
          <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/About" onClick={toggleMenu}>About</NavLink>
        </li>
        <li>
          <NavLink to="/Resume" onClick={toggleMenu}>Resume</NavLink>
        </li>
        <li>
          <NavLink to="/Projects" onClick={toggleMenu}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/Certification" onClick={toggleMenu}>Certifications</NavLink>
        </li>
        <li>
          <NavLink to="/Contact" onClick={toggleMenu}>Contact</NavLink>
        </li>
      </ul>
      </nav>
    </div>
  )
}
export default Navbar;
import { useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="nav_logo">
        <h1>Portfolio</h1>
      </div>
      <div className="nav_toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`nav_menu ${isMenuOpen ? 'show' : ''}`}>
        <ul>
          <li><a href="#Hero" className="active-link" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#About" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#Skill" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Project</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

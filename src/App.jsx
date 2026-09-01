import { Routes, Route, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';

import burger from "./assets/Images/hamburger.png";
import Logo from "./assets/Images/logo.png";

import fb from "./assets/Images/socials-links/fb.svg";
import x from "./assets/Images/socials-links/x.svg";
import linked from "./assets/Images/socials-links/in.svg";
import github from "./assets/Images/socials-links/github.svg";

import About from "./pages/About";
import Blogs from "./pages/Blog";
import Games from "./pages/Games";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function App() {

  // Finisher Header Effect
  useEffect(() => {
    // Initialize the finisher header effect
    if (window.FinisherHeader) {
      new window.FinisherHeader({
        count: 11,
        size: {
          min: 500,
          max: 900,
          pulse: 0
        },
        speed: {
          x: { min: 0.1, max: 0.6 },
          y: { min: 0.1, max: 0.6 }
        },
        colors: {
          background: "#797979",
          particles: [
            "#c9c9c9",
            "#000000",
            "#c7c7c7",
            "#000000",
            "#989898"
          ]
        },
        blending: "overlay",
        opacity: {
          center: 0.5,
          edge: 0.05
        },
        skew: 0,
        shapes: ["s"]
      });
    }
  }, []);

  // Menu Toggle State
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  // Toggle handlers
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  }
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);
  const handleExit = () => {
    window.open('', '_self').close();
  }

  return (
    <div className="app">
      <header className="header finisher-header">
        <div className="headerContainer">
          <div className="logoContainer">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              <img src={Logo} alt="Home" className="logo" />
            </NavLink>
          </div>
          <div className="textLinkContainer">
            <nav className={`textLinks ${menuOpen ? "collapsed" : ""}`}>
              <ul>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
                <li><NavLink to="/works" className={({ isActive }) => isActive ? "active" : ""}>Works</NavLink></li>
                {/*
                <li><NavLink to="/games" className={({ isActive }) => isActive ? "active" : ""}>Games</NavLink></li>
                <li><NavLink to="/music" className={({ isActive }) => isActive ? "active" : ""}>Music</NavLink></li>
                */}
                <li><NavLink to="/blogs" className={({ isActive }) => isActive ? "active" : ""}>Blogs</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
              </ul>
            </nav>
          </div>
          <div className="burgerMenu" onClick={toggleMenu}>
            <img src={burger} alt="Menu" className="burger" />
            {menuOpen && (
              <div className="dropdownMenu">
                <div className="mobileNavLinks">
                  <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                  <NavLink to="/works" className={({ isActive }) => isActive ? "active" : ""}>Works</NavLink>
                  {/*
                  <NavLink to="/games" className={({ isActive }) => isActive ? "active" : ""}>Games</NavLink>
                  <NavLink to="/music" className={({ isActive }) => isActive ? "active" : ""}>Music</NavLink>
                  */}
                  <NavLink to="/blogs" className={({ isActive }) => isActive ? "active" : ""}>Blogs</NavLink>
                  <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                </div>
                <div className="dropdownDivider"></div>
                <button onClick={toggleDarkMode}>
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About darkMode={darkMode}/>} />
          <Route path="/works" element={<Works/>} />
          <Route path="/games" element={<Games/>} />
          <Route path="/music" element={<Music/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>

      <footer className="footer">
        <p>Copyright &copy; {new Date().getFullYear()} Franco Padua. All rights reserved.</p>
        <div className="footerLinks">
          <a href="https://www.facebook.com/frankrev.dev" target="_blank">
            <img src={fb} alt="Facebook" />
          </a>
          <a href="https://www.x.com/frankrevdev" target="_blank">
            <img src={x} alt="X" />
          </a>
          <a href="https://www.linkedin.com/in/vince-franco-padua-b5062a3a6/" target="_blank">
            <img src={linked} alt="LinkedIn" />
          </a>
          <a href="https://github.com/frankrevdev" target="_blank">
            <img src={github} alt="GitHub" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App
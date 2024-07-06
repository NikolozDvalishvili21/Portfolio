import React, { useState } from "react";
import "../Navbar/style.css";
import useIsMobile from "../../hooks/resize";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isMobile ? (
        <div className={`burger ${isOpen ? "hide" : ""}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      ) : (
        <div className={`navbar_content ${isOpen ? "open" : ""}`}>
          <div className="inner_content">
            <a href="#" className="home">
              Home
            </a>
            <a href="#" className="projects">
              Projects
            </a>
            <a href="#" className="about">
              About
            </a>
            <a href="#" className="contact">
              Contact
            </a>
          </div>
        </div>
      )}

      {isMobile && isOpen && (
        <div className="overlay">
          <div className="sidebar">
            <div className="inner_content_side">
              <a href="#" className="home">
                Home
              </a>
              <a href="#" className="projects">
                Projects
              </a>
              <a href="#" className="about">
                About
              </a>
              <a href="#" className="contact">
                Contact
              </a>
            </div>
            <div className="close-btn" onClick={closeMenu}>
              X
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

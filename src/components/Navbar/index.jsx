import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

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
            <a href="#" className="about">
              About
            </a>
            <a href="#" className="contact">
              Contact
            </a>
            <a href="#" className="projects">
              Projects
            </a>
          </div>
        </div>
      )}

      {isMobile && isOpen && (
        <div className="overlay">
          <div className="sidebar">
            <div className="inner_content_side">
              <a href="#" className="home" onClick={closeMenu}>
                Home
              </a>
              <a href="#" className="about" onClick={closeMenu}>
                About
              </a>
              <a href="#" className="contact" onClick={closeMenu}>
                Contact
              </a>
              <a href="#" className="projects" onClick={closeMenu}>
                Projects
              </a>
            </div>
            <div
              className="close-btn"
              onClick={closeMenu}
              style={{ fontFamily: "retro" }}
            >
              X
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

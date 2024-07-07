import React from "react";
import useIsMobile from "../../hooks/resize";
import { ReactTyped } from "react-typed";
import "../TextMe/style.css";
import HTML from "../icons/HTML.png";

const AboutMe = () => {
  const IsMobile = useIsMobile();

  return (
    <>
      {IsMobile ? (
        <div className="high"></div>
      ) : (
        <div className="me-container">
          <h1 className="title-me">ABOUT ME</h1>
          <div className="about-me-text">
            <ReactTyped
              strings={[
                "Hello! I'm Nika Dvalishvili, a third-year Computer Science student at GAU. Alongside my studies, I co-founded <span style='color: #F68B1F; background-color: transparent;'>GarGari</span>, a startup where I apply my skills in web development and design. Our goal is to innovate and bring practical solutions to market, making my role both challenging and rewarding.",
              ]}
              typeSpeed={30}
              backSpeed={20}
              backDelay={1500}
              cursorChar="<span style='background-color: transparent;'>_</span>"
              showCursor={true}
              style={{
                fontFamily: "retro",
                fontSize: "20px",
                color: "white",
                backgroundColor: "transparent",
              }}
              options={{
                parser: "html",
              }}
            />
          </div>

          {/* <div className="skills-container">
            <div className="html">
              <img
                src={HTML}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "transparent",
                  filter: "invert(1)",
                }}
              />
              <p className="skill-title" style={{ fontFamily: "retro", color: "white" }}>HTML</p>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
};

export default AboutMe;

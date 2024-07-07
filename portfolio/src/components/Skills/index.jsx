import React from "react";
import HTML from "../icons/HTML.png";
import CSS from "../icons/CSS.png";
import SQL from "../icons/SQL.png";
import "../Skills/style.css";

const Skills = () => {
  return (
    <>
      <div className="main-skills-cont">
        <h1 className="title-skills">SKILLS</h1>
        <div className="skills-container">
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
            <p
              className="skill-title"
              style={{ fontFamily: "retro", color: "white" }}
            >
              HTML
            </p>
          </div>
          <div className="css">
            <img
              src={CSS}
              alt=""
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "transparent",
                filter: "invert(1)",
              }}
            />
            <p
              className="skill-title"
              style={{ fontFamily: "retro", color: "white" }}
            >
              CSS
            </p>
          </div>
          <div className="sql">
            <img
              src={SQL}
              alt=""
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "transparent",
                filter: "invert(1)",
              }}
            />
            <p
              className="skill-title"
              style={{ fontFamily: "retro", color: "white" }}
            >
              SQL
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

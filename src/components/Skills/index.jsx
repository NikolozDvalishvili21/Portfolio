import React from "react";
import HTML from "../icons/HTML.png";
import CSS from "../icons/CSS.png";
import SQL from "../icons/SQL.png";
import PHP from "../icons/PHP.png";
import REACT from "../icons/REACT.png";
import JS from "../icons/JS.png";
import "../Skills/style.css";
import useIsMobile from "../../hooks/resize";

const Skills = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <div className="main-skills-cont">
          <h1 className="title-skills">SKILLS</h1>
          <div className="divider">
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
              <div className="js">
                <img
                  src={JS}
                  alt=""
                  style={{
                    width: "90px",
                    height: "90px",
                    backgroundColor: "transparent",
                    filter: "invert(1)",
                    paddingTop: "10px",
                  }}
                />
                <p
                  className="skill-title"
                  style={{
                    fontFamily: "retro",
                    color: "white",
                  }}
                >
                  JS
                </p>
              </div>
            </div>

            <div className="skills-container-second">
              <div className="react">
                <img
                  src={REACT}
                  alt=""
                  style={{
                    width: "90px",
                    height: "90px",
                    backgroundColor: "transparent",
                    filter: "invert(1)",
                    paddingTop: "10px",
                  }}
                />
                <p
                  className="skill-title"
                  style={{
                    fontFamily: "retro",
                    color: "white",
                  }}
                >
                  REACT
                </p>
              </div>
              <div className="php">
                <img
                  src={PHP}
                  alt=""
                  style={{
                    width: "90px",
                    height: "90px",
                    backgroundColor: "transparent",
                    filter: "invert(1)",
                    paddingTop: "10px",
                  }}
                />
                <p
                  className="skill-title"
                  style={{
                    fontFamily: "retro",
                    color: "white",
                  }}
                >
                  PHP
                </p>
              </div>
              <div className="sql">
                <img
                  src={SQL}
                  alt=""
                  style={{
                    width: "90px",
                    height: "90px",
                    backgroundColor: "transparent",
                    filter: "invert(1)",
                    paddingTop: "10px",
                    paddingLeft: "5px",
                  }}
                />
                <p
                  className="skill-title"
                  style={{
                    fontFamily: "retro",
                    color: "white",
                    paddingTop: "6px",
                    paddingRight: "10px",
                  }}
                >
                  SQL
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
            <div className="js">
              <img
                src={JS}
                alt=""
                style={{
                  width: "90px",
                  height: "90px",
                  backgroundColor: "transparent",
                  filter: "invert(1)",
                  paddingTop: "10px",
                }}
              />
              <p
                className="skill-title"
                style={{
                  fontFamily: "retro",
                  color: "white",
                  paddingTop: "6px",
                }}
              >
                Javascript
              </p>
            </div>
            <div className="react">
              <img
                src={REACT}
                alt=""
                style={{
                  width: "90px",
                  height: "90px",
                  backgroundColor: "transparent",
                  filter: "invert(1)",
                  paddingTop: "10px",
                }}
              />
              <p
                className="skill-title"
                style={{
                  fontFamily: "retro",
                  color: "white",
                  paddingTop: "6px",
                }}
              >
                REACT
              </p>
            </div>
            <div className="php">
              <img
                src={PHP}
                alt=""
                style={{
                  width: "90px",
                  height: "90px",
                  backgroundColor: "transparent",
                  filter: "invert(1)",
                  paddingTop: "10px",
                }}
              />
              <p
                className="skill-title"
                style={{
                  fontFamily: "retro",
                  color: "white",
                  paddingTop: "6px",
                }}
              >
                PHP
              </p>
            </div>
            <div className="sql">
              <img
                src={SQL}
                alt=""
                style={{
                  width: "90px",
                  height: "90px",
                  backgroundColor: "transparent",
                  filter: "invert(1)",
                  paddingTop: "10px",
                }}
              />
              <p
                className="skill-title"
                style={{
                  fontFamily: "retro",
                  color: "white",
                  paddingTop: "6px",
                  paddingRight: "10px",
                }}
              >
                SQL
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;

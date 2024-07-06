import React from "react";
// import { ReactTyped } from "react-typed";
import "../Navbar/style.css"
const Navbar = () => {
  // const [value, setValue] = React.useState("one");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  return (
    <>
       {/* <ReactTyped
          strings={["Hi! I am Nika Dvalishvili"]}
          typeSpeed={100}
          backSpeed={20}
          cursorChar=">"
          showCursor={true}
          style={{fontFamily: 'retro', color: "#17D102", fontSize: "25px"}}
        /> */}

        <div className="navbar_content">
          <div className="inner_content">
            <a href="" className="home">Home</a>
            <a href="" className="projects">Projects</a>
            <a href="" className="about">About</a>
            <a href="" className="contact">Contact</a>
          </div>
        </div>
        
    </>
  );
};

export default Navbar;

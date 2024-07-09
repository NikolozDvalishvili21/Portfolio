import React from "react";
import "../ImagePop/style.css";
import { ReactTyped } from "react-typed";
import me from "../../images/me.jpg"

const Image = () => {
  const strings = [
    "<span style='color: #17D102;'>HELLO! I AM </span><span style='color: #FF5733;'>NIKA DVALISHVILI</span>",
    "I LOVE CODING",
    "WELCOME TO PLATFORM ABOUT ME!",
  ];

  return (
    <div className="introduction">
      <div className="me">
        <img src={me} />
      </div>
      <div className="react-typed-text-wrapper">
        <ReactTyped
          strings={strings}
          typeSpeed={50}
          backSpeed={20}
          backDelay={1500}
          loop
          cursorChar=">"
          showCursor={true}
          style={{ fontFamily: "retro", fontSize: "40px", color: "#17D102" }}
        />
      </div>
      <button className="learn-more">
        Learn More
      </button>
    </div>
  );
};

export default Image;

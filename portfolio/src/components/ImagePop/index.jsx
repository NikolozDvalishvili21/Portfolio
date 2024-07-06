import React from "react";
import "../ImagePop/style.css";
import { ReactTyped } from "react-typed";

const Image = () => {
  const strings = [
    "<span style='color: #17D102;'>HELLO! I AM </span><span style='color: #FF5733;'>NIKA DVALISHVILI</span>",
    "I LOVE CODING",
    "WELCOME TO MY WEBSITE",
  ];

  return (
    <div className="introduction">
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
  );
};

export default Image;

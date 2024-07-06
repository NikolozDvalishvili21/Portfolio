import React from "react";
import { ReactTyped } from "react-typed";
const Navbar = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
       <ReactTyped
          strings={["Hi! I am Nika Dvalishvili"]}
          typeSpeed={100}
          backSpeed={20}
          cursorChar=">"
          showCursor={true}
          style={{fontFamily: 'retro', color: "#17D102"}}
        />
    </>
  );
};

export default Navbar;

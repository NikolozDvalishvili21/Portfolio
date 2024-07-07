import React from "react";
import TextMe from "../components/TextMe/index";
import Skills from "../components/Skills";
const Home = () => {
  return (
    <>
      <TextMe />
      <div style={{ backgroundColor: "#101010" }}>
        <Skills />
      </div>
    </>
  );
};

export default Home;

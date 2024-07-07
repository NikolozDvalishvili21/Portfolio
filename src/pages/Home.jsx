import React from "react";
import Navbar from "../components/Navbar/index";
import Image from "../components/ImagePop/index";

const Home = () => {
  return (
    <>
      <div
        className="home"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", justifyContent: "space-between" }}
      >
        <Navbar />
        <Image />
      </div>
    </>
  );
};

export default Home;

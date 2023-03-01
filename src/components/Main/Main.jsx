import React from "react";
import About from "./About/About";
import Cards from "./Cards/Cards";

const Main = () => {
  return (
    <>
      <About />
      {/* <Cards titleCards="Project" cb="#456461" /> */}
      <Cards titleCards="My Components" cb="#454a64" />
    </>
  );
};

export default Main;

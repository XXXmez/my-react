import React from "react";
import About from "../../components/About/About";
import Cards from "../../components/Cards/Cards";

import { dataComponents, dataProject } from "../../data";

const MianPage = () => {
  return (
    <>
      <About />
      <Cards titleCards="My Project" cb="#454a64" data={dataProject} />
      <Cards titleCards="My Components" cb="#454a64" data={dataComponents} />
    </>
  );
};

export default MianPage;

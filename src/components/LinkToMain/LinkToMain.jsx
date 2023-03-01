import React from "react";
import { Link } from "react-router-dom";

const LinkToMain = () => {
  return (
    <Link to={"/"} className="content-link">
      🠔 Come back
    </Link>
  );
};

export default LinkToMain;

import React from "react";
import LinkToMain from "../../components/LinkToMain/LinkToMain";
import PagesContent from "../../components/PagesContent/PagesContent";
import Area from "../../components/project/Area/Area";

const AreaPage = () => {
  return (
    <>
      <LinkToMain />
      <PagesContent title="Area" component={<Area />} />
    </>
  );
};

export default AreaPage;

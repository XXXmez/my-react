import React from "react";
import LinkToMain from "../../components/LinkToMain/LinkToMain";
import PagesContent from "../../components/PagesContent/PagesContent";
import TranslatorV1 from "../../components/project/Translator_v1/Translator_v1";

const TranslatorV1Page = () => {
  return (
    <>
      <LinkToMain />
      <PagesContent title="Translator V1" component={<TranslatorV1 />} />
    </>
  );
};

export default TranslatorV1Page;

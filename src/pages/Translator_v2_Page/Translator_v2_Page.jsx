import React from "react";
import LinkToMain from "../../components/LinkToMain/LinkToMain";
import PagesContent from "../../components/PagesContent/PagesContent";
import TranslatorV2 from "../../components/project/Translator_v2/Translator_v2";

const TranslatorV2Page = () => {
  return (
    <>
      <LinkToMain />
      <PagesContent title="Translator V1" component={<TranslatorV2 />} />
    </>
  );
};

export default TranslatorV2Page;

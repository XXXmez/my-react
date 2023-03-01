import React from "react";
import LinkToMain from "../../components/LinkToMain/LinkToMain";
import PagesContent from "../../components/PagesContent/PagesContent";
import Accordion from "../../components/project/Accordion/Accordion";

const dataFaq = [
  {
    id: 1,
    title: "Метафора",
    text: "Слово или выражение, употребляемое в переносном значении",
  },
  {
    id: 2,
    title: "Синоним",
    text: "Слова одной части речи, различные по написанию и звучанию, но тождественные или близкие по значению",
  },
  {
    id: 3,
    title: "Антонимы",
    text: "слова одной и той же части речи с противоположным значением. Укажем примеры антонимов, принадлежащих к разным частям речи",
  },
];

const AccordionPage = () => {
  return (
    <>
      <LinkToMain />
      <PagesContent
        title="Accordion"
        component={<Accordion data={dataFaq} />}
      />
    </>
  );
};

export default AccordionPage;

import React from "react";
import LinkToMain from "../../components/LinkToMain/LinkToMain";
import PagesContent from "../../components/PagesContent/PagesContent";
import HiddenText from "../../components/project/HiddenText/HiddenText";
const str =
  "Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь приюту для животных Домашний. У этих ребят живёт более 1500 четвероногих, и благодаря их труду ежегодно сотни питомцев находят свой новый дом.";
const HiddenTextPage = () => {
  return (
    <>
      <LinkToMain />
      <PagesContent title="Hidden text" component={<HiddenText str={str} />} />
    </>
  );
};

export default HiddenTextPage;

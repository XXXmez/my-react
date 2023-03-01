import React from "react";
import Card from "../Card/Card";

const arrObj = [
  {
    id: "1",
    name: "Slider",
    description:
      "The Slider component accepts an array of objects and a 'loop' value, which is responsible for repeating the slider.",
    url: "slider",
  },
  {
    id: "2",
    name: "Hidden text",
    description:
      "Сomponent that accepts a string consisting of a large number of sentences, returns a reduced string to one sentence and a button to expand the string",
    url: "hidden_text",
  },
  {
    id: "3",
    name: "Accordion",
    description:
      "Accordion component, accepts an array of objects, returns a list with dropdown content",
    url: "accordion",
  },
  {
    id: "4",
    name: "Translator v1",
    description:
      "List component, word-translation, saves words in an array of objects, when translating a word, it checks the “translation” property of the object, if necessary, changes it to the desired one",
    url: "translator_v1",
  },
  {
    id: "5",
    name: "Translator v2",
    description:
      "List component, word-translation, saves words in an array of objects, uses the state of the component to translate the word",
    url: "translator_v2",
  },
  {
    id: "6",
    name: "Pagination",
    description:
      "Pagination component, accepts a link to api, returns a list of elements with pagination",
    url: "pagination",
    favorites: true,
  },
  {
    id: "7",
    name: "To-do list with sections",
    description: "Todo",
    url: "todo",
  },
  {
    id: "8",
    name: "Area",
    description: "Area",
    url: "area",
  },
];

const newArr = [...arrObj]
  .reverse()
  .sort((el) => (el.favorites === true ? -1 : 1));

const Cards = ({ titleCards = "", cb = "" }) => {
  const lastWork = (ind) => {
    return String(newArr.length) === ind;
  };

  return (
    <section className="cards">
      <div className="cards-title">
        <h2>{titleCards}</h2>
      </div>
      {newArr.map((el) => (
        <Card
          key={el.id}
          title={el.name}
          descr={el.description}
          cb={cb}
          url={el.url}
          favorites={el.favorites}
          lastWork={lastWork(el.id)}
        />
      ))}
    </section>
  );
};

export default Cards;

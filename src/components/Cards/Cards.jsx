import React from "react";
import Card from "./Card/Card";

const Cards = ({ titleCards = "", cb = "", data = [] }) => {
  const dataSort = [...data]
    .reverse()
    .sort((el) => (el.favorites === true ? -1 : 1));

  const lastWork = (ind) => {
    return String(dataSort.length) === ind;
  };

  return (
    <section className="cards">
      <div className="cards-title">
        <h2>{titleCards}</h2>
      </div>
      {dataSort.map((el) => (
        <Card
          key={el.id}
          title={el.name}
          descr={el.description}
          cb={cb}
          url={el.url}
          link={el.link}
          favorites={el.favorites}
          lastWork={lastWork(el.id)}
        />
      ))}
    </section>
  );
};

export default Cards;

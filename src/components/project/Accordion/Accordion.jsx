import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";

const Accordion = ({ data = [] }) => {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="faq_list">
      {data.map((el) => {
        return (
          <AccordionItem
            key={el.id}
            id={el.id}
            title={el.title}
            text={el.text}
            activeFaq={activeFaq}
            setActiveFaq={setActiveFaq}
          />
        );
      })}
    </div>
  );
};

export default Accordion;

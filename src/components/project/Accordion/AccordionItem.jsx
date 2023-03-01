import React from "react";

const AccordionItem = ({ id, title, text, activeFaq, setActiveFaq }) => {
  const toogleFaq = (id) => {
    setActiveFaq((prev) => (prev === id ? 0 : id));
  };

  return (
    <div className="faq_item">
      <h2>
        {title}{" "}
        <button onClick={() => toogleFaq(id)}>
          {!(activeFaq === id) ? "➕" : "➖"}
        </button>
      </h2>
      {activeFaq === id && <p>{text}</p>}
    </div>
  );
};

export default AccordionItem;

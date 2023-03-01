import React from "react";

const Items = ({ itemsBase, currentPage, countItems }) => {
  return (
    <div className="items">
      {[...itemsBase].splice(currentPage * countItems, countItems).map((el) => (
        <p key={el.id}>{el.text}</p>
      ))}
    </div>
  );
};

export default Items;

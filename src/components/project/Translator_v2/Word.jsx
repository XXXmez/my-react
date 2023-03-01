import React, { useState } from "react";

const Word = ({
  ind = 0,
  word = "",
  wordTransl = "",
  deleteWord = () => {},
}) => {
  const [active, setActive] = useState(false);
  const transition = () => {
    setActive((prev) => !prev);
  };

  return (
    <div
      style={{
        border: "1px solid #666666",
        display: "flex",
        gap: "10px",
        marginBottom: "10px",
        padding: "10px",
      }}
    >
      {active ? <p>{wordTransl}</p> : <p>{word}</p>}

      <button style={{ marginLeft: "auto" }} onClick={transition}>
        {active ? "Оригинал" : "Перевод"}
      </button>

      <button onClick={() => deleteWord(ind)}>🗑️</button>
    </div>
  );
};

export default Word;

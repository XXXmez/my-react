import React from "react";
import { useState } from "react";

const TranslatorV1 = () => {
  const [word, setWord] = useState("");
  const [wordTrasl, setWordTrasl] = useState("");

  const [dataWord, setDataWord] = useState([
    { word: "Привет", wordTransl: "Hello" },
  ]);

  const addWord = () => {
    setDataWord((prev) => [...prev, { word: word, wordTransl: wordTrasl }]);
  };
  const wordTranslate = (index) => {
    setDataWord((prev) =>
      prev.map((el, ind) =>
        ind === index ? { ...el, translate: !el.translate } : el
      )
    );
    console.log(dataWord);
  };
  const wordDelete = (index) => {
    setDataWord((prev) => prev.filter((_el, ind) => ind !== index));
  };

  return (
    <div>
      <div>
        <div>
          <label htmlFor="word">Введите слово: </label>
          <input
            id="word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="wordTransl">Введите перевод: </label>
          <input
            id="wordTransl"
            value={wordTrasl}
            onChange={(e) => setWordTrasl(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button onClick={addWord}>Добавить</button>
      </div>
      <div>
        {dataWord.map((el, ind) => (
          <div
            key={ind}
            style={{
              border: "1px solid black",
              display: "flex",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            {el.translate ? <p>{el.wordTransl}</p> : <p>{el.word}</p>}

            <button
              style={{ marginLeft: "auto" }}
              onClick={() => wordTranslate(ind)}
            >
              {el.translate ? "Оригинал" : "Перевод"}
            </button>

            <button onClick={() => wordDelete(ind)}>🗑️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TranslatorV1;

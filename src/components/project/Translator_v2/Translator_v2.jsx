import React from "react";
import { useState } from "react";
import Word from "./Word";

const data = [{ id: 0, word: "Привет", wordTransl: "Hello" }];

const TranslatorV2 = () => {
  const [dataWord, setDataWord] = useState(data);
  const [words, setWords] = useState({ word: "", transl: "" });

  const addWord = () => {
    setDataWord((prev) => [
      ...prev,
      { id: prev.length, word: words.word, wordTransl: words.transl },
    ]);
    setWords((prev) => ({ ...prev, word: "", transl: "" }));
  };

  const deleteWord = (index) => {
    setDataWord((prev) => prev.filter((_el, ind) => ind !== index));
  };

  return (
    <div>
      <div className="inputs-fields">
        <div>
          <label htmlFor="word">Введите слово: </label>
          <input
            id="word"
            value={words.word}
            onChange={(e) =>
              setWords((prev) => ({ ...prev, word: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="wordTransl">Введите перевод: </label>
          <input
            id="wordTransl"
            value={words.transl}
            onChange={(e) =>
              setWords((prev) => ({ ...prev, transl: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="btn">
        <button
          disabled={
            words.word.trim().length === 0 || words.transl.trim().length === 0
          }
          onClick={addWord}
        >
          Добавить
        </button>
      </div>
      <div className="output" style={{ marginTop: "10px" }}>
        {dataWord.map((el, ind) => (
          <Word
            key={el.id}
            word={el.word}
            wordTransl={el.wordTransl}
            deleteWord={deleteWord}
            ind={ind}
          />
        ))}
      </div>
    </div>
  );
};

export default TranslatorV2;

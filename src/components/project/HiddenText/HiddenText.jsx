import React from "react";
import { useState } from "react";

const HiddenText = ({ str = "" }) => {
  const indexFirstSectence =
    str.indexOf(",") > str.indexOf(".") ? str.indexOf(".") : str.indexOf(",");

  const partSentence = str.slice(0, indexFirstSectence) + "...";

  const [currentStr, setCurrentStr] = useState(partSentence);
  const [reduction, setReduction] = useState(true);

  const changeStr = () => {
    setReduction((prev) => !prev);
    setCurrentStr(reduction ? str : partSentence);
  };

  return (
    <>
      {str.length > 0 && (
        <div>
          <p>
            {currentStr}{" "}
            <button onClick={changeStr}>
              {reduction ? "Показать все" : "Скрыть"}
            </button>
          </p>
        </div>
      )}
    </>
  );
};

export default HiddenText;

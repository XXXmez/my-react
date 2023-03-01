import React, { useState } from "react";
import "./Todo.css";

const dataTodo = {
  house: [
    { id: 0, text: "todo house 1" },
    { id: 1, text: "todo house 2" },
  ],
  work: [
    { id: 0, text: "todo work 1" },
    { id: 1, text: "todo work 2" },
  ],
  studies: [
    { id: 0, text: "todo studies 1" },
    { id: 1, text: "todo studies 2" },
  ],
};

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(dataTodo);

  const [active, setActive] = useState(Object.keys(data)[0]);

  const handlerButton = (el) => {
    setActive(el);
  };

  const handlerInput = () => {
    const newActiveData = [...data[active]];
    newActiveData.push({
      id: data[active].length,
      text: inputValue,
    });
    setData((prev) => ({ ...prev, [active]: newActiveData }));
  };

  const deleteTodo = (ind) => {
    const newActiveData = [...data[active]].filter((el) => el.id !== ind);

    console.log(newActiveData);
    setData((prev) => ({ ...prev, [active]: newActiveData }));
  };

  return (
    <div className="todo">
      <div className="todo-input">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handlerInput}>add</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {Object.keys(data).map((el, ind) => (
          <button
            style={el === active ? { background: "#839292" } : {}}
            onClick={() => handlerButton(el)}
            key={ind}
          >
            {el}
          </button>
        ))}
      </div>
      <div className="todo-res">
        <h2 className="todo-res-title">{active}</h2>
        {data[active].map((el) => (
          <div key={el.id}>
            <span>{el.text}</span>
            <button onClick={() => deleteTodo(el.id)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;

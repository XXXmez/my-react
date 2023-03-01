import React from "react";
import { useState } from "react";
import SliderItem from "./SliderItem";
import "./Slider.css";

const Slider = ({ data = [], loop = false }) => {
  const [slide, setSlide] = useState(0);

  const goPrevSlide = () => {
    setSlide((prev) => (prev > 0 ? prev - 1 : data.length - 1));
  };
  const goNextSlide = () => {
    setSlide((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="slider">
      <div
        className="slider-items"
        style={{ transform: `translateX(${-(slide * 700)}px)` }}
      >
        {data.map((el) => (
          <SliderItem key={el.id} src={el.imgLink} alt={el.title} />
        ))}
      </div>
      <div className="slider-btns">
        <button
          disabled={loop === false && slide === 0}
          className="slider-btn"
          onClick={goPrevSlide}
        >
          ⬅
        </button>
        <button
          disabled={loop === false && slide === data.length - 1}
          className="slider-btn"
          onClick={goNextSlide}
        >
          ➡
        </button>
      </div>
    </div>
  );
};

export default Slider;

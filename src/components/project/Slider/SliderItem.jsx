import React from "react";

const SliderItem = ({ src, alt }) => {
  return (
    <div className="slider_item">
      <img src={src} width={700} height={400} alt={alt} />
    </div>
  );
};

export default SliderItem;

import React from "react";
import { Button } from "./../../button";


const SectionSlider = (props) => {
  const { text, img } = props;
  return (
    <div style={{ backgroundImage: `url(${img})`, height: "670px", backgroundRepeat:"no-repeat", backgroundSize: "cover" }}>
      <div className="container center">
        <h1 className="h1-slide">{text}</h1>
        <Button text="Наша презентация" />
      </div>

    </div>

  );
};

export { SectionSlider };

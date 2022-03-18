import React from "react";
import styles from "./ButtonStyle.module.scss";
const Button = (props) => {
  const { bg, color, wd, ht, text, value } = props;
  return (
    <div>
      <button
        disabled={value}
        className="btn btn-default"
        style={{
          backgroundColor: bg,
          color: color,
          maxWidth: wd,
          height: ht,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export { Button };

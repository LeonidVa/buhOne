import React from "react";
import styles from "./NextArrowStyle.module.scss";
import { ArrowRight } from "../../assets/icons/svg/icons";

const NextArrow = (props) => {
  const { onClick, currentSlide, bgColor, op} = props;
  return (
    <div className={styles.next}>
      <button
        disabled={currentSlide == 5 ? true : false}
        className={(styles.next__btn, "btn-arrows")}
        onClick={onClick}
        style={{ backgroundColor: bgColor, opacity: op }}
      >
        <div>
          <ArrowRight />
        </div>
      </button>
    </div>
  );
};

export { NextArrow };

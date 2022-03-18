import React from "react";
import styles from "./PrevArrowstyle.module.scss";
import { ArrowLeft } from "../../assets/icons/svg/icons";

const PrevArrow = (props) => {
  const { onClick, currentSlide, bgColor, op } = props;
  return (
    <div className={styles.prev}>
      <button
        disabled={currentSlide == 0 ? true : false}
        className={(styles.prev__btn, "btn-arrows")}
        onClick={onClick}
        style={{ backgroundColor: bgColor, opacity: op }}
      >
        <div>
          <ArrowLeft />
        </div>
      </button>
    </div>
  );
};

export { PrevArrow };

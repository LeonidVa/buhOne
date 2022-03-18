import React from "react";
import { Logo } from "../../../assets/icons/svg/icons";
import style from "./HeaderLeft.module.scss";

const HeaderLeft = () => {
  return (
    <div className={style.left}>
      <div className={style.left__logo}>
        <Logo />
      </div>
      <div className={style.left__name}>
        <span>BuhOne</span>
      </div>
    </div>
  );
};

export { HeaderLeft };

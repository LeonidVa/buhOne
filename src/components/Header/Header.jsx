import React from "react";
import { HeaderLeft } from "./HeaderLeft";
import { HeaderRight } from "./HeaderRight";
import styles from "./HeaderStyle.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <HeaderLeft />
        <HeaderRight />
      </div>
    </div>
  );
};

export { Header };

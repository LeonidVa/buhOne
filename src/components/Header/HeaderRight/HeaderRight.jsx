import React from "react";
import styles from "./HeaderRight.module.scss";
import { NavTop } from "./NavTop";
import { Navbar } from "../../Navbar/Navbar";
const HeaderRight = () => {
  return (
    <div className={styles.right}>
      <div className={styles.right__container}>
        <div className={styles.navtop}>
          <NavTop />
        </div>
        <div className={styles.navbottom}>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export { HeaderRight };

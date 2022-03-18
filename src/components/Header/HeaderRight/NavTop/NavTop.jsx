import React from "react";
import { Link } from "react-router-dom";
import { Clock, Mail, Map, Phone } from "../../../../assets/icons/svg/icons";
import styles from "./NavTop.module.scss";
const NavTop = () => {
  return (
    <div className={styles.navtop}>
      <ul className={styles.navtop__list}>
        <li className={styles.navtop__li}>
          <Link to="/" className={styles.navtop__link}>
            <Phone />
            <span>8 (111) 222-33-44</span>
          </Link>
        </li>
        <li className={styles.navtop__li}>
          <Link to="/" className={styles.navtop__link}>
            <Clock />
            <span>Пн-Пт 10:00-18:00</span>
          </Link>
        </li>
        <li className={styles.navtop__li}>
          <Link to="/" className={styles.navtop__link}>
            <Mail />
            <span>order@buhone.ru</span>
          </Link>
        </li>
        <li className={styles.navtop__li}>
          <Link to="/" className={styles.navtop__link}>
            <Map />
            <span>Невский пр. 130</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { NavTop };

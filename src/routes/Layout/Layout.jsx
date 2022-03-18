import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
// import { Navbar } from "../../components/Navbar";

import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Header />

          {/* <Navbar text={pages} /> */}
        </div>
      </header>

      <main className={styles.mainIndex}>
        <Outlet />
      </main>

      <footer>
        <div className={styles.container}>
          <Footer />
        </div>
      </footer>
    </>
  );
};

export { Layout };

import React from "react";
import styles from "./Grid.module.scss";

export default function GridArea() {
  return (
    <div className={styles.containerArea}>
      <header>Header</header>
      <nav>Navigation</nav>
      <main>Main</main>
      <aside>Sidebar</aside>
      <footer>Footer</footer>
    </div>
  );
}

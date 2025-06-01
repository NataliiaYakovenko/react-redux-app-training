import React from "react";
import styles from "./Grid.module.scss";

export default function GridFillAndFit() {
  return (
    <div className={styles.containerFillAndFit}>
      <div className={styles.boxFillAndFit}>1</div>
      <div className={styles.boxFillAndFit}>2</div>
      <div className={styles.boxFillAndFit}>3</div>
    </div>
  );
}

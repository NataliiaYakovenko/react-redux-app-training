import React from "react";
import styles from "./Grid.module.scss";

export default function Grid() {
  return (
    <div className={styles.container}>
      <div className={`${styles.box} ${styles.box1}`}>1</div>
      <div className={styles.box}>2</div>
      <div className={styles.box}>3</div>
      <div className={styles.box}>4</div>
      <div className={`${styles.box} ${styles.box5}`}>5</div>
      <div className={styles.box}>6</div>
      <div className={styles.box}>7</div>
      <div className={styles.box}>8</div>
      <div className={styles.box}>9</div>
      <div className={`${styles.box} ${styles.box10}`}>10</div>
    </div>
  );
}

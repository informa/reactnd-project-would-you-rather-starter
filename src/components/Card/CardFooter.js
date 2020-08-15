import React from "react";
import styles from "./Card.module.css";

const CardFooter = ({ children }) => {
  return <div className={styles.footer}>{children}</div>;
};

export default CardFooter;

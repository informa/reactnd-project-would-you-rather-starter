import React from "react";
import styles from "./Card.module.css";

const CardHeader = ({ children }) => {
  return <div className={styles.header}>{children}</div>;
};

export default CardHeader;

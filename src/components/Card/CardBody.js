import React from "react";
import styles from "./Card.module.css";

const CardBody = ({ children, avatar }) => {
  return (
    <div className={avatar ? styles.container: styles.body}>
      {avatar}
      {children}
    </div>
  );
};

export default CardBody;

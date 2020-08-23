import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const CardFooter = ({ children }) => {
  return <div className={styles.footer}>{children}</div>;
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardFooter;

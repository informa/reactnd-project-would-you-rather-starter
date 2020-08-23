import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const CardHeader = ({ children }) => {
  return <div className={styles.header}>{children}</div>;
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardHeader;

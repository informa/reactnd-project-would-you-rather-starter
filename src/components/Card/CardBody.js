import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const CardBody = ({ children, avatar }) => {
  return (
    <div className={avatar ? styles.container: styles.body}>
      {avatar}
      {children}
    </div>
  );
};


CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  avatar: PropTypes.node,
};

CardBody.defaultProps = {
  avatar: undefined,
};

export default CardBody;

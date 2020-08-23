import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

const Card = ({ children, header, body, footer, avatar }) => {
  const content = body || <CardBody avatar={avatar}>{children}</CardBody>;

  return (
    <div className={styles.card}>
      {header && (
        <CardHeader>
          <h3>{header}</h3>
        </CardHeader>
      )}
      {content}
      {footer && <CardFooter>{footer}</CardFooter>}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

Card.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string,
  body: PropTypes.node,
  footer: PropTypes.node,
  avatar: PropTypes.node,
};

Card.defaultProps = {
  children: undefined,
  header: undefined,
  body: undefined,
  footer: undefined,
  avatar: undefined,
};

export default Card;

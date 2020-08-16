import React from "react";
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

export default Card;

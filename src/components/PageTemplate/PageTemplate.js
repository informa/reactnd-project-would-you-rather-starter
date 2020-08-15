import React from "react";
import styles from "./PageTemplate.module.css";

const PageTemplate = ({ children, pageTitle, alignCentre }) => {
  const pageHeading = (pageTitle) => {
    if (typeof pageTitle === "string") {
      return <h1>{pageTitle}</h1>;
    } else {
      return pageTitle;
    }
  };
  return (
    <div className={`${styles.page} ${alignCentre && styles.center}`}>
      <div className={styles.title}>{pageHeading(pageTitle)}</div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default PageTemplate;

import React from "react";
import styles from "./PageTemplate.module.css";

const PageTemplate = ({ children, pageTitle }) => {
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h1>{pageTitle}</h1>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default PageTemplate;

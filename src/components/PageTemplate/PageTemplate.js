import React from "react";
import PropTypes from "prop-types";
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

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  alignCentre: PropTypes.bool,
};

PageTemplate.defaultProps = {
  alignCentre: false,
  pageTitle: undefined,
};

export default PageTemplate;

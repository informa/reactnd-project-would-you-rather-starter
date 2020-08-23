import React from "react";
import PropTypes from "prop-types";
import styles from "./Tabs.module.css";

const Tabs = ({ tabs, onClick }) => {
  return (
    <ul className={styles.tabs}>
      {tabs.map((tab) => (
        <li key={tab.label} className={styles.tabitem}>
          <a
            name={tab.label}
            className={
              tab.active ? `${styles.active} ${styles.tablink}` : styles.tablink
            }
            onClick={onClick}
            href={tab.label}
          >
            {tab.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      active: PropTypes.bool,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tabs;

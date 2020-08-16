import React from "react";
import styles from "./Tabs.module.css";

const Tabs = ({ tabs, onClick }) => {
  return (
    <ul className={styles.tabs}>
      {tabs.map((tab) => (
        <li className={styles.tabitem}>
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

export default Tabs;

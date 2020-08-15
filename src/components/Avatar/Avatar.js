import React from "react";
import styles from "./Avatar.module.css";

const Avatar = ({ size, image, backgroundColor, name }) => {
  return (
    <span
      className={styles.avatar}
      style={{ backgroundColor: backgroundColor, width: size, height: size }}
    >
      <img
        alt={name}
        width={size}
        height={size}
        src={image}
        className={styles.image}
      />
    </span>
  );
};

export default Avatar;

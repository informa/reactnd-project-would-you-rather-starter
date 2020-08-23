import React from "react";
import PropTypes from "prop-types";
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

Avatar.propTypes = {
  size: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Avatar;

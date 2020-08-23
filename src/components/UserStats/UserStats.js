import React from "react";
import PropTypes from "prop-types";
import styles from "./UserStats.module.css";
import Avatar from "../Avatar/Avatar";
import Card from "../Card/Card";

const UserStats = ({
  avatarURL,
  name,
  backgroundColor,
  createdQuestions,
  answeredQuestions,
  score,
}) => {
  const avatar = (
    <Avatar
      name={name}
      size="100px"
      image={avatarURL}
      backgroundColor={backgroundColor}
    />
  );

  return (
    <Card header={name} avatar={avatar}>
      <div className={styles.details}>
        <dl className={styles.stats}>
          <dt>Created questions</dt>
          <dd>{createdQuestions}</dd>
          <dt>Answered questions</dt>
          <dd>{answeredQuestions}</dd>
        </dl>
      </div>
      <dl className={styles.score}>
        <dt>Score</dt>
        <dd>{score}</dd>
      </dl>
    </Card>
  );
};

UserStats.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  createdQuestions: PropTypes.number.isRequired,
  answeredQuestions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default UserStats;

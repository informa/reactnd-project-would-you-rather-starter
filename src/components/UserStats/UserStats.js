import React from "react";
import styles from "./UserStats.module.css";

// TODO:
// styles:

class UserStats extends React.Component {
  render() {
    const {
      avatarURL,
      name,
      createdQuestions,
      answeredQuestions,
      score,
    } = this.props.user;
    return (
      <div className="card">
        <div className="card__header">
          <h3>{name}</h3>
        </div>
        <div className={styles.container}>
          <div className={styles.avatar}>
            <img src={avatarURL} alt={name} />
          </div>
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
        </div>
      </div>
    );
  }
}

export default UserStats;

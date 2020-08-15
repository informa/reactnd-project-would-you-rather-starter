import React from "react";
import styles from "./UserStats.module.css";
import Avatar from "../Avatar/Avatar";
import Card from "../Card/Card";

// TODO:
// styles:

class UserStats extends React.Component {
  render() {
    const {
      avatarURL,
      name,
      backgroundColor,
      createdQuestions,
      answeredQuestions,
      score,
    } = this.props.user;

    const avatar = (
      <Avatar
        name={name}
        size="100px"
        image={avatarURL}
        backgroundColor={backgroundColor}
      />
    );
    
    return (
      <Card header={name}>
        <Card.Body avatar={avatar}>
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
        </Card.Body>
      </Card>
    );
  }
}

export default UserStats;

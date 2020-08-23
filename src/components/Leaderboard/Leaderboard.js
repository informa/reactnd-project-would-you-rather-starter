import React from "react";
import { connect } from "react-redux";
import UserStats from "../UserStats/UserStats";
import styles from "./Leaderboard.module.css";
import PageTemplate from "../PageTemplate/PageTemplate";

class Leaderboard extends React.Component {
  render() {
    return (
      <PageTemplate pageTitle="Leaderboard">
        <ul className={styles.list}>
          {this.props.usersWithScores.map((user) => (
            <li className={styles.item} key={user.id}>
              <UserStats user={user} />
            </li>
          ))}
        </ul>
      </PageTemplate>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const usersWithScores = Object.keys(users).map((id) => {
    const user = users[id];
    const createdQuestions = user.questions.length;
    const answeredQuestions = Object.keys(user.answers).length;
    const score = createdQuestions + answeredQuestions;

    return {
      id,
      name: user.name,
      avatarURL: user.avatarURL,
      backgroundColor: user.backgroundColor,
      createdQuestions,
      answeredQuestions,
      score,
    };
  });

  return {
    usersWithScores: usersWithScores.sort((a, b) => b.score - a.score),
  };
};

export default connect(mapStateToProps)(Leaderboard);

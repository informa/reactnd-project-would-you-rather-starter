import React from "react";
import { connect } from "react-redux";
import UserStats from "../UserStats/UserStats";
import styles from "./Leaderboard.module.css";

// TODO:
// style the tabs

class Leaderboard extends React.Component {
  render() {
    console.log(this.props.userIds);
    return (
      <div>
        <h1>Leaderboard</h1>
        <ul className={styles.list}>
          {this.props.usersWithScores.map((user) => (
            <li className={styles.item} key={user.id}>
              <UserStats user={user} />
            </li>
          ))}
        </ul>
      </div>
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

import React from "react";
import { connect } from "react-redux";
import Question from "../Question/Question";
import styles from "./QuestionList.module.css";

class QuestionList extends React.Component {
  render() {
    return (
      <div>
        <h1>Home (user: {this.props.authedUserName})</h1>
        <ul className={styles.list}>
          {this.props.questionIds.map((id) => (
            <li className={styles.item} key={id}>
              <Question id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  const user = users[authedUser];
  return {
    authedUserName: user.name,
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
};

export default connect(mapStateToProps)(QuestionList);

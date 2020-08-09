import React from "react";
import { connect } from "react-redux";
import Question from "../Question/Question";
import styles from "./QuestionList.module.css";
import PageTemplate from "../PageTemplate/PageTemplate";

// TODO:
// refactor sorting function as it is used twice ?
// style the tabs

class QuestionList extends React.Component {
  state = {
    showUnanswered: true,
  };

  handleClick = (event) => {
    event.preventDefault();

    if (event.target.className !== styles.active) {
      this.setState((prevState) => ({
        showUnanswered: !prevState.showUnanswered,
      }));
    }
  };

  render() {
    return (
      <PageTemplate pageTitle="Would You Rather?">
        <ul>
          <li>
            <a
              name="answered questions"
              className={!this.state.showUnanswered ? styles.active : null}
              onClick={this.handleClick}
              href="answered-questions"
            >
              Answered Questions
            </a>
          </li>
          <li>
            <a
              name="unanswered questions"
              className={this.state.showUnanswered ? styles.active : null}
              onClick={this.handleClick}
              href="unanswered-questions"
            >
              Unanswered Questions
            </a>
          </li>
        </ul>

        {this.state.showUnanswered && (
          <ul className={styles.list}>
            {this.props.unanswered.map((id) => (
              <li className={styles.item} key={id}>
                <Question id={id} />
              </li>
            ))}
          </ul>
        )}

        {!this.state.showUnanswered && (
          <ul className={styles.list}>
            {this.props.answered.map((id) => (
              <li className={styles.item} key={id}>
                <Question id={id} />
              </li>
            ))}
          </ul>
        )}
      </PageTemplate>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  const user = users[authedUser];
  const allQuestions = Object.keys(questions);
  const answeredQuestions = Object.keys(user.answers);
  const unansweredQuestions = allQuestions.filter(
    (x) => !answeredQuestions.includes(x)
  );

  return {
    answered: answeredQuestions.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    unanswered: unansweredQuestions.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
};

export default connect(mapStateToProps)(QuestionList);

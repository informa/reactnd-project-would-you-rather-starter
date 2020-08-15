import React from "react";
import { connect } from "react-redux";
import Question from "../Question/Question";
import styles from "./QuestionList.module.css";
import PageTemplate from "../PageTemplate/PageTemplate";
import Card from "../Card/Card";

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
        <ul className={styles.tabs}>
          <li className={styles.tabitem}>
            <a
              name="answered questions"
              className={
                !this.state.showUnanswered
                  ? `${styles.active} ${styles.tablink}`
                  : styles.tablink
              }
              onClick={this.handleClick}
              href="answered-questions"
            >
              Answered Questions
            </a>
          </li>
          <li className={styles.tabitem}>
            <a
              name="unanswered questions"
              className={
                this.state.showUnanswered
                  ? `${styles.active} ${styles.tablink}`
                  : styles.tablink
              }
              onClick={this.handleClick}
              href="unanswered-questions"
            >
              Unanswered Questions
            </a>
          </li>
        </ul>

        {this.state.showUnanswered && (
          <ul className={styles.list}>
            {this.props.unanswered.length > 0 ? (
              this.props.unanswered.map((id) => (
                <li className={styles.item} key={id}>
                  <Question id={id} />
                </li>
              ))
            ) : (
              <li>
                <Card header="Awesome...">
                  <p>
                    you have ansered all the question, why not create a new one?
                  </p>
                  <Card.Footer>
                    <button
                      className="button"
                    >
                      Create new Question
                    </button>
                  </Card.Footer>
                </Card>
              </li>
            )}
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

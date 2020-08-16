import React from "react";
import { connect } from "react-redux";
import Question from "../Question/Question";
import styles from "./QuestionList.module.css";
import PageTemplate from "../PageTemplate/PageTemplate";
import Card from "../Card/Card";
import { withRouter } from "react-router-dom";
import Tabs from "../Tabs/Tabs";

// TODO:
// refactor sorting function as it is used twice ?

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

  handleNoUnanswered = () => {
    this.props.history.push(`/add`);
  };

  render() {
    const { showUnanswered } = this.state;
    return (
      <PageTemplate pageTitle="Would You Rather?">
        <Tabs
          tabs={[
            { label: "Unanswered Questions", active: showUnanswered },
            { label: "Answered Questions", active: !showUnanswered },
          ]}
          onClick={this.handleClick}
        />

        {showUnanswered && (
          <ul className={styles.list}>
            {this.props.unanswered.length > 0 ? (
              this.props.unanswered.map((id) => (
                <li className={styles.item} key={id}>
                  <Question id={id} />
                </li>
              ))
            ) : (
              <li>
                <Card
                  header="Awesome..."
                  footer={
                    <button
                      className="button"
                      onClick={this.handleNoUnanswered}
                    >
                      Create new Question
                    </button>
                  }
                >
                  <p>
                    you have answered all the questions, why not create a new
                    one?
                  </p>
                </Card>
              </li>
            )}
          </ul>
        )}

        {!showUnanswered && (
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

export default withRouter(connect(mapStateToProps)(QuestionList));

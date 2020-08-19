import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PageTemplate from "../PageTemplate/PageTemplate";
import UnansweredQuestion from "../UnansweredQuestion/UnansweredQuestion";
import AnsweredQuestion from "../AnsweredQuestion/AnsweredQuestion";

class QuestionDetail extends React.Component {
  render() {
    if (!this.props.question) {
      return (
        <Redirect
          to={{
            pathname: "/question-not-found",
            state: { from: this.props.id },
          }}
        />
      );
    }

    const { authedUserVoted, id } = this.props.question;

    return (
      <PageTemplate alignCentre>
        {authedUserVoted ? (
          <AnsweredQuestion id={id} />
        ) : (
          <UnansweredQuestion id={id} />
        )}
      </PageTemplate>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }, props) => {
  const { id } = props.match.params;
  const question = questions[id];

  if (!question) {
    return {
      id,
      question: undefined,
    };
  }

  const authedUserVotedOptionOne = question.optionOne.votes.includes(
    authedUser
  );
  const authedUserVotedOptionTwo = question.optionTwo.votes.includes(
    authedUser
  );
  const authedUserVoted = authedUserVotedOptionOne || authedUserVotedOptionTwo;

  return {
    question: {
      id,
      authedUserVoted,
    },
  };
};

export default connect(mapStateToProps)(QuestionDetail);

import React from "react";
import { connect } from "react-redux";
import styles from "./QuestionDetail.module.css";
import PageTemplate from "../PageTemplate/PageTemplate";
import UnansweredQuestion from "../UnansweredQuestion/UnansweredQuestion";
import AnsweredQuestion from "../AnsweredQuestion/AnsweredQuestion";

// TODO:
// refactor map state to prop into helper function like formatQuestion in Data.js ?
// styles

class QuestionDetail extends React.Component {
  render() {
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

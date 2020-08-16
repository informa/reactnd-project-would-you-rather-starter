import React from "react";
import { connect } from "react-redux";
import styles from "./AnsweredQuestion.module.css";
import Avatar from "../Avatar/Avatar";
import Card from "../Card/Card";
import { formatAvatarFromQuestion } from "../../utils/helper";

class AnsweredQuestion extends React.Component {
  render() {
    const { options, totalNumberOfVotes } = this.props.question;
    const { name, backgroundColor, avatarURL } = this.props.user;

    const avatar = (
      <Avatar
        name={name}
        size="100px"
        image={avatarURL}
        backgroundColor={backgroundColor}
      />
    );

    return (
      <Card header={name} avatar={avatar}>
        <div className={styles.details}>
          <h3>Results</h3>
          <ul class={styles.results}>
            {Object.keys(options).map((option) => {
              const {
                numberOfVotes,
                percentageOfVotes,
                authedUserVoted,
                text,
              } = options[option];

              return (
                <li key={option}>
                  <p className={styles.answer}>
                    <span>{text}:</span>
                    {authedUserVoted && (
                      <strong className={styles.uservote}>Your vote</strong>
                    )}
                  </p>
                  <div className={styles.score}>
                    <span className={styles.bar}>
                      <span
                        className={styles.percentage}
                        style={{
                          flexBasis: `${percentageOfVotes}%`,
                        }}
                      />
                    </span>
                    <span className={styles.label}>{percentageOfVotes}%</span>
                    <p className={styles.votes}>
                      {numberOfVotes} of {totalNumberOfVotes} votes.
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }, { id }) => {
  const question = questions[id];
  const numberOfOptionOneVotes = question.optionOne.votes.length;
  const numberOfOptionTwoVotes = question.optionTwo.votes.length;
  const totalNumberOfVotes = numberOfOptionOneVotes + numberOfOptionTwoVotes;
  const percentageOfOptionOneVotes =
    (numberOfOptionOneVotes / totalNumberOfVotes) * 100;
  const percentageOfOptionTwoVotes =
    (numberOfOptionTwoVotes / totalNumberOfVotes) * 100;
  const authedUserVotedOptionOne = question.optionOne.votes.includes(
    authedUser
  );
  const authedUserVotedOptionTwo = question.optionTwo.votes.includes(
    authedUser
  );

  return {
    question: {
      options: {
        optionOne: {
          text: question.optionOne.text,
          numberOfVotes: numberOfOptionOneVotes,
          percentageOfVotes: percentageOfOptionOneVotes.toFixed(),
          authedUserVoted: authedUserVotedOptionOne,
        },
        optionTwo: {
          text: question.optionTwo.text,
          numberOfVotes: numberOfOptionTwoVotes,
          percentageOfVotes: percentageOfOptionTwoVotes.toFixed(),
          authedUserVoted: authedUserVotedOptionTwo,
        },
      },
      totalNumberOfVotes: totalNumberOfVotes,
    },
    user: formatAvatarFromQuestion({ id, questions, users }),
  };
};

export default connect(mapStateToProps)(AnsweredQuestion);

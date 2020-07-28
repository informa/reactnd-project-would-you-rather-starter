import React from "react";
import { connect } from "react-redux";
import styles from "./QuestionDetail.module.css";
import { formatDate } from "../../utils/helper";


// TODO: 
// refactor map state to prop into helper function like formatQuestion in Data.js ?
// styles: 
//  question and answered states, 
// ACTION: handleVote - submit question form

class QuestionDetail extends React.Component {
  renderQuestion = () => {
    const { options } = this.props.question;
    return (
      <form>
        <h3>Would you rather ...</h3>
        {Object.keys(options).map((option) => {
          const { text } = options[option];

          return (
            <div key={option}>
              <input
                type="radio"
                id={option}
                name="woud-you-rather"
                value={text}
              />
              <label htmlFor={option}>{text}</label>
            </div>
          );
        })}
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    );
  };

  renderResults = () => {
    const { options, totalNumberOfVotes } = this.props.question;
    return (
      <div>
        <h3>Results</h3>
        <ul>
          {Object.keys(options).map((option) => {
            const {
              numberOfVotes,
              percentageOfVotes,
              authedUserVoted,
              text,
            } = options[option];

            return (
              <li key={option}>
                <div>{text}</div>
                <div>
                  {numberOfVotes} of {totalNumberOfVotes} ({percentageOfVotes}
                  %)
                  {authedUserVoted && <strong>Your vote</strong>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  render() {
    const { avatarURL, name } = this.props.user;
    const { totalNumberOfVotes } = this.props.question;
    console.log(this.props);
    return (
      <div className={styles.question}>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.container}>
          <div className={styles.avatar}>
            <img src={avatarURL} alt={name} />
          </div>
          <div className={styles.details}>
            {totalNumberOfVotes > 0
              ? this.renderResults()
              : this.renderQuestion()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users }, props) => {
  const { id } = props.match.params;
  const question = questions[id];
  const author = question.author;
  const userAuthor = users[author];
  const numberOfOptionOneVotes = question.optionOne.votes.length;
  const numberOfOptionTwoVotes = question.optionTwo.votes.length;
  const totalNumberOfVotes = numberOfOptionOneVotes + numberOfOptionTwoVotes;
  const percentageOfOptionOneVotes =
    (numberOfOptionOneVotes / totalNumberOfVotes) * 100;
  const percentageOfOptionTwoVotes =
    (numberOfOptionTwoVotes / totalNumberOfVotes) * 100;

  return {
    question: {
      options: {
        optionOne: {
          text: question.optionOne.text,
          numberOfVotes: numberOfOptionOneVotes,
          percentageOfVotes: percentageOfOptionOneVotes.toFixed(),
          authedUserVoted: question.optionOne.votes.includes(author),
        },
        optionTwo: {
          text: question.optionTwo.text,
          numberOfVotes: numberOfOptionTwoVotes,
          percentageOfVotes: percentageOfOptionTwoVotes.toFixed(),
          authedUserVoted: question.optionTwo.votes.includes(author),
        },
      },
      totalNumberOfVotes: totalNumberOfVotes,
      dateTime: formatDate(question.timestamp),
    },
    user: {
      name: userAuthor.name,
      avatarURL: userAuthor.avatarURL,
    },
  };
};

export default connect(mapStateToProps)(QuestionDetail);

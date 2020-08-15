import React from "react";
import { connect } from "react-redux";
import styles from "./QuestionDetail.module.css";
import { formatDate } from "../../utils/helper";
import PageTemplate from "../PageTemplate/PageTemplate";
import { handleSaveQuestionAnswer } from "../../actions/shared";
import Avatar from "../Avatar/Avatar";
import Card from "../Card/Card";

// TODO:
// refactor map state to prop into helper function like formatQuestion in Data.js ?
// styles

class QuestionDetail extends React.Component {
  state = {
    answer: "",
  };

  handleChange = (event) => {
    const answer = event.target.id;

    this.setState({
      answer,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { id } = this.props.match.params;
    const { dispatch, authedUser } = this.props;

    dispatch(
      handleSaveQuestionAnswer({
        authedUser,
        qid: id,
        answer: this.state.answer,
      })
    );
  };

  renderAvatar = () => {
    const { name, backgroundColor, avatarURL } = this.props.user;

    return (
      <Avatar
        name={name}
        size="100px"
        image={avatarURL}
        backgroundColor={backgroundColor}
      />
    );
  };

  renderQuestion = () => {
    const { options } = this.props.question;

    const renderOptions = Object.keys(options).map((option) => {
      const { text } = options[option];

      return (
        <div key={option}>
          <input
            type="radio"
            id={option}
            name="woud-you-rather"
            value={text}
            onChange={this.handleChange}
          />
          <label htmlFor={option}>{text}</label>
        </div>
      );
    });

    return (
      <form onSubmit={this.handleSubmit}>
        <Card.Body avatar={this.renderAvatar()}>
          <div className={styles.details}>
            <h3>Would you rather ...</h3>
            {renderOptions}
          </div>
        </Card.Body>
        <Card.Footer>
          <button
            type="submit"
            className="button"
            disabled={this.state.answer === "" ? true : false}
          >
            Submit
          </button>
        </Card.Footer>
      </form>
    );
  };

  renderResults = () => {
    const { options, totalNumberOfVotes } = this.props.question;

    return (
      <Card.Body avatar={this.renderAvatar()}>
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
      </Card.Body>
    );
  };

  render() {
    const { name } = this.props.user;
    const { authedUserVoted } = this.props.question;
    return (
      <PageTemplate alignCentre>
        <Card header={name}>
          {authedUserVoted ? this.renderResults() : this.renderQuestion()}
        </Card>
      </PageTemplate>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }, props) => {
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
  const authedUserVotedOptionOne = question.optionOne.votes.includes(
    authedUser
  );
  const authedUserVotedOptionTwo = question.optionTwo.votes.includes(
    authedUser
  );
  const authedUserVoted = authedUserVotedOptionOne || authedUserVotedOptionTwo;

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
      authedUserVoted,
      dateTime: formatDate(question.timestamp),
    },
    user: {
      name: userAuthor.name,
      avatarURL: userAuthor.avatarURL,
      backgroundColor: userAuthor.backgroundColor,
    },
    authedUser,
  };
};

export default connect(mapStateToProps)(QuestionDetail);

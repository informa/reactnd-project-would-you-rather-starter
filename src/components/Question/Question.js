import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styles from "./Question.module.css";
import { formatDate } from "../../utils/helper";

// TODO:
// refactor map state to prop into helper function like formatQuestion in Data.js ?
// styles:
//  date time?,
//  show 15 chars of question one ...become a superh...?

class Question extends React.Component {
  handleClick = () => {
    const { id, history } = this.props;

    history.push(`/question/${id}`);
  };
  render() {
    const { avatarURL, name } = this.props.user;
    const { optionOne, optionTwo, dateTime } = this.props.question;
    return (
      <div className="card">
        <div className="card__header">
          <h3>{name}</h3>
        </div>
        <div className={styles.container}>
          <div className={styles.avatar}>
            <img src={avatarURL} alt={name} />
          </div>
          <div className={styles.details}>
            <h3>Would you rather</h3>
            <p>{dateTime}</p>
            <ul>
              <li>{optionOne}</li>
              <li>{optionTwo}</li>
            </ul>
          </div>
        </div>
        <div className="card__footer">
          <button className="button" onClick={this.handleClick}>
            View poll
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users }, { id }) => {
  const question = questions[id];
  const author = question.author;
  const userAuthor = users[author];

  return {
    question: {
      optionOne: question.optionOne.text,
      optionTwo: question.optionTwo.text,
      dateTime: formatDate(question.timestamp),
    },
    user: {
      name: userAuthor.name,
      avatarURL: userAuthor.avatarURL,
    },
  };
};

export default withRouter(connect(mapStateToProps)(Question));

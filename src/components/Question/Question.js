import React from "react";
import { connect } from "react-redux";
import styles from "./Question.module.css";
import { formatDate } from "../../utils/helper";


// TODO: 
// refactor map state to prop into helper function like formatQuestion in Data.js ?
// styles: 
//  date time?, 
//  show 15 chars of question one ...become a superh...?

class Question extends React.Component {
  render() {
    const { avatarURL, name } = this.props.user;
    const { optionOne, optionTwo, dateTime } = this.props.question;
    return (
      <div className={styles.question}>
        <h3 className={styles.title}>{name}</h3>
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
            <button className="button">View poll</button>
          </div>
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

export default connect(mapStateToProps)(Question);

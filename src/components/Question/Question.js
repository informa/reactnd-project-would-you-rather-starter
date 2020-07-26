import React from "react";
import { connect } from "react-redux";
import styles from "./Question.module.css";

class Question extends React.Component {
  render() {
    const { avatarURL, name } = this.props.user;
    const { optionOne, optionTwo } = this.props.question;
    return (
      <div className={styles.question}>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.container}>
          <div className={styles.avatar}>
            <img src={avatarURL} alt={name} />
          </div>
          <div className={styles.details}>
            <h3>Would you rather</h3>
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
    },
    user: {
      name: userAuthor.name,
      avatarURL: userAuthor.avatarURL,
    },
  };
};

export default connect(mapStateToProps)(Question);

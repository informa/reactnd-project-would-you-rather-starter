import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styles from "./Question.module.css";
import { formatDate } from "../../utils/helper";
import Avatar from "../Avatar/Avatar";
import Card from "../Card/Card";

// TODO:
// refactor map state to prop into helper function like formatQuestion in Data.js ?

class Question extends React.Component {
  handleClick = () => {
    const { id, history } = this.props;

    history.push(`/question/${id}`);
  };
  render() {
    const { avatarURL, name, backgroundColor } = this.props.user;
    const { optionOne, dateTime } = this.props.question;

    const optionOneText = `...${optionOne.substring(0, 15)}...`;

    const avatar = (
      <Avatar
        name={name}
        size="100px"
        image={avatarURL}
        backgroundColor={backgroundColor}
      />
    );

    return (
      <Card>
        <Card.Header>
          <h3>{name}</h3>
          <span className={styles.label}>{dateTime}</span>
        </Card.Header>
        <Card.Body avatar={avatar}>
          <div className={styles.details}>
            <h3>Would you rather</h3>
            <p>{optionOneText}</p>
          </div>
        </Card.Body>
        <Card.Footer>
          <button className="button" onClick={this.handleClick}>
            View poll
          </button>
        </Card.Footer>
      </Card>
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
      dateTime: formatDate(question.timestamp),
    },
    user: {
      name: userAuthor.name,
      avatarURL: userAuthor.avatarURL,
      backgroundColor: userAuthor.backgroundColor,
    },
  };
};

export default withRouter(connect(mapStateToProps)(Question));

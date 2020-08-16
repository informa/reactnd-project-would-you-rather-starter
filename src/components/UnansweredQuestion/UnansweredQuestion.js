import React from "react";
import { connect } from "react-redux";
import styles from "./UnansweredQuestion.module.css";
import { handleSaveQuestionAnswer } from "../../actions/shared";
import Avatar from "../Avatar/Avatar";
import Card from "../Card/Card";
import { formatAvatarFromQuestion } from "../../utils/helper";

class UnansweredQuestion extends React.Component {
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

    const { dispatch, authedUser, question } = this.props;

    dispatch(
      handleSaveQuestionAnswer({
        authedUser,
        qid: question.id,
        answer: this.state.answer,
      })
    );
  };

  render() {
    const { options } = this.props.question;
    const { name, backgroundColor, avatarURL } = this.props.user;

    const avatar = (
      <Avatar
        name={name}
        size="100px"
        image={avatarURL}
        backgroundColor={backgroundColor}
      />
    );

    const footer = (
      <button
        type="submit"
        className="button"
        disabled={this.state.answer === "" ? true : false}
      >
        Submit
      </button>
    );

    return (
      <form onSubmit={this.handleSubmit}>
        <Card header={name} avatar={avatar} footer={footer}>
          <div className={styles.details}>
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
                    onChange={this.handleChange}
                  />
                  <label htmlFor={option}>{text}</label>
                </div>
              );
            })}
          </div>
        </Card>
      </form>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }, { id }) => {
  const question = questions[id];

  return {
    question: {
      id,
      options: {
        optionOne: {
          text: question.optionOne.text,
        },
        optionTwo: {
          text: question.optionTwo.text,
        },
      },
    },
    user: formatAvatarFromQuestion({ id, questions, users }),
    authedUser,
  };
};

export default connect(mapStateToProps)(UnansweredQuestion);

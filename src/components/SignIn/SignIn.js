import React from "react";
import { connect } from "react-redux";
import styles from "./SignIn.module.css";
import SelectSearch from "react-select-search";

// TODO:
// Setup action
// Setup routing
// Styling, selectable option

class SignIn extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    const userId = event.target.name;
    console.log(userId);

    // Action set setAuthedUser with the id
    // Then router to QuestionList
  };

  renderFriend = (props, option, snapshot, className) => {
    return (
      <button {...props} className={className} type="button">
        <span className={styles.avatar}>
          <img
            alt={option.name}
            width="32"
            height="32"
            src={option.avatarURL}
            className={styles.image}
          />
        </span>
        <span className={styles.name}>{option.name}</span>
      </button>
    );
  };

  render() {
    return (
      <div>
        <h1>SignIn</h1>
        <SelectSearch
          options={this.props.userOptions}
          renderOption={this.renderFriend}
          name="language"
          value={this.props.authedUser}
          placeholder="Select user"
          // printOptions="always"
          className={(key) => styles[key]}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  const userOptions = Object.keys(users).map((user) => {
    const { name, avatarURL, id } = users[user];
    return {
      name,
      avatarURL,
      value: id,
    };
  });

  return {
    authedUser,
    userOptions,
  };
};

export default connect(mapStateToProps)(SignIn);

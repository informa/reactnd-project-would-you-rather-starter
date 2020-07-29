import React from "react";
import { connect } from "react-redux";
import styles from "./SignIn.module.css";

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

  render() {
    return (
      <div>
        <h1>SignIn</h1>

        <ul className={styles.list}>
          {Object.keys(this.props.users).map((user) => {
            const { name, avatarURL, id } = this.props.users[user];
            return (
              <li className={styles.item} key={id}>
                <a
                  className={styles.link}
                  href="#"
                  title={name}
                  name={id}
                  onClick={this.handleClick}
                >
                  <span className={styles.avatar}>
                    <img src={avatarURL} alt={name} />
                  </span>
                  <span className={styles.name}>{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  const user = users[authedUser];

  return {
    users,
  };
};

export default connect(mapStateToProps)(SignIn);

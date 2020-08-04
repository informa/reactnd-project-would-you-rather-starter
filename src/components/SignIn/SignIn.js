import React from "react";
import { connect } from "react-redux";
import styles from "./SignIn.module.css";
import SelectSearch from "react-select-search";
import { setAuthedUser } from "../../actions/authedUser";
import PageTemplate from "../PageTemplate/PageTemplate";

// TODO:
// Setup routing
// Styling page cleanup

class SignIn extends React.Component {
  state = {
    value: this.props.authedUser,
  };

  handleChange = (value) => {
    this.setState(() => ({
      value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.dispatch(setAuthedUser(this.state.value));
  };

  renderFriend = (props, option, snapshot, className) => {
    const { image, name } = option;
    return (
      <button {...props} className={className} type="button">
        <span className={styles.avatar}>
          <img
            alt={name}
            width="32"
            height="32"
            src={image}
            className={styles.image}
          />
        </span>
        <span className={styles.name}>{name}</span>
      </button>
    );
  };

  render() {
    const { authedUser, userOptions } = this.props;
    return (
      <PageTemplate pageTitle="Sign in">
        <form className="card" onSubmit={this.handleSubmit}>
          <div className="card__header">
            <h2>SignIn ({authedUser})</h2>
          </div>
          <SelectSearch
            options={userOptions}
            renderOption={this.renderFriend}
            name="Sign in user"
            value={authedUser}
            placeholder="Select user"
            // printOptions="always"
            className={(key) => styles[key]}
            onChange={this.handleChange}
          />
          <div className="card__footer">
            <button type="submit" className="button">
              Sign in
            </button>
          </div>
        </form>
      </PageTemplate>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  // Create array of users to send to SelectSearch component
  const userOptions = Object.keys(users).map((user) => {
    const { name, avatarURL, id } = users[user];
    return {
      name,
      image: avatarURL,
      value: id,
    };
  });

  return {
    authedUser,
    userOptions,
  };
};

export default connect(mapStateToProps)(SignIn);

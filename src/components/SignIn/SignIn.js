import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styles from "./SignIn.module.css";
import SelectSearch from "react-select-search";
import { setAuthedUser } from "../../actions/authedUser";
import PageTemplate from "../PageTemplate/PageTemplate";
import Avatar from "../Avatar/Avatar";
import Card from "../Card/Card";

// TODO:
// Setup routing
// Styling page cleanup

class SignIn extends React.Component {
  state = {
    value: "",
  };

  handleChange = (value) => {
    this.setState(() => ({
      value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, history } = this.props;

    this.props.dispatch(setAuthedUser(this.state.value));
    history.push(`/`);
  };

  renderFriend = (props, option, snapshot, className) => {
    const { image, name, backgroundColor } = option;
    return (
      <button {...props} className={className} type="button">
        <Avatar
          name={name}
          size="32px"
          image={image}
          backgroundColor={backgroundColor}
        />
        <span className={styles.name}>{name}</span>
      </button>
    );
  };

  pageTitle = (
    <div>
      <h1>Sign in</h1>
      <p>You must signin to view the Would You Rather app.</p>
    </div>
  );

  render() {
    const { userOptions } = this.props;
    return (
      <PageTemplate pageTitle={this.pageTitle} alignCentre>
        <form onSubmit={this.handleSubmit}>
          <Card header="Sign in with one of the these users.">
            <SelectSearch
              options={userOptions}
              renderOption={this.renderFriend}
              name="Sign in user"
              placeholder="Select user"
              className={(key) => styles[key]}
              onChange={this.handleChange}
            />
            <Card.Footer>
              <button
                type="submit"
                className="button"
                disabled={this.state.value === "" ? true : false}
              >
                Sign in
              </button>
            </Card.Footer>
          </Card>
        </form>
      </PageTemplate>
    );
  }
}

const mapStateToProps = ({ users }) => {
  // Create array of users to send to SelectSearch component
  const userOptions = Object.keys(users).map((user) => {
    const { name, avatarURL, id, backgroundColor } = users[user];
    return {
      name,
      image: avatarURL,
      backgroundColor,
      value: id,
    };
  });

  return {
    userOptions,
  };
};

export default connect(mapStateToProps)(SignIn);

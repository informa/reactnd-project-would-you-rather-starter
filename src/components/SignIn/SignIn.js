import React from "react";
import { connect } from "react-redux";
import styles from "./SignIn.module.css";
import SelectSearch from "react-select-search";
import { setAuthedUser } from "../../actions/authedUser";
import PageTemplate from "../PageTemplate/PageTemplate";
import Avatar from "../Avatar/Avatar";
import Card from "../Card/Card";

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
    const { history, location } = this.props;
    const previousLocation =
      location.pathname === "/signin" ? "/" : location.pathname;

    this.props.dispatch(setAuthedUser(this.state.value));
    history.push(previousLocation);
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

  pageTitle = () => {
    const { location } = this.props;
    const msg =
      location.pathname !== "/signin" ? (
        <span>
          page <strong>{location.pathname}</strong> of
        </span>
      ) : undefined;

    return (
      <div>
        <h1>Sign in</h1>
        <p>You must signin to view {msg} the Would You Rather app.</p>
      </div>
    );
  };

  render() {
    const { userOptions } = this.props;

    const footer = (
      <button
        type="submit"
        className="button"
        disabled={this.state.value === "" ? true : false}
      >
        Sign in
      </button>
    );

    return (
      <PageTemplate pageTitle={this.pageTitle()} alignCentre>
        <form onSubmit={this.handleSubmit}>
          <Card header="Sign in with one of the these users." footer={footer}>
            <SelectSearch
              options={userOptions}
              renderOption={this.renderFriend}
              name="Sign in user"
              placeholder="Select user"
              className={(key) => styles[key]}
              onChange={this.handleChange}
            />
          </Card>
        </form>
      </PageTemplate>
    );
  }
}

const mapStateToProps = ({ users }) => {
  // Array of users to send to SelectSearch component
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

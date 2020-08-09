import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Nav.module.css";
import { setAuthedUser } from "../../actions/authedUser";

// TODO:
// styles:

class Nav extends React.Component {
  handleSignOut = () => {
    this.props.dispatch(setAuthedUser(null));
  };

  render() {
    return (
      <nav className={styles.nav}>
        <div
          className={`${styles.container} ${
            !this.props.authed && styles["sign-in"]
          }`}
        >
          {this.props.authed && (
            <ul className={styles.list}>
              <li>
                <NavLink
                  to="/"
                  className={styles.link}
                  exact
                  activeClassName={styles.active}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/new"
                  className={styles.link}
                  activeClassName={styles.active}
                >
                  New Question
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/leaderboard"
                  exact
                  className={styles.link}
                  activeClassName={styles.active}
                >
                  Leaderboard
                </NavLink>
              </li>
            </ul>
          )}
          <ul className={styles.list}>
            {this.props.authed && (
              <li>
                <span className={`${styles.user} ${styles.link}`}>
                  <span className={styles.avatar}>
                    <img
                      className={styles.image}
                      alt={this.props.name}
                      src={this.props.avatarURL}
                      title={this.props.name}
                    />
                  </span>
                  <span className={styles.name}>
                    <strong>Signed in as:</strong> {this.props.name}
                  </span>
                </span>
              </li>
            )}
            <li>
              <NavLink
                to="/signin"
                exact
                className={styles.link}
                activeClassName={styles.active}
                onClick={this.props.authed ? this.handleSignOut : undefined}
              >
                {this.props.authed ? "Logout" : "Signin"}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  if (authedUser !== null) {
    const user = users[authedUser];

    return {
      authed: true,
      name: user.name,
      avatarURL: user.avatarURL,
    };
  }

  return {
    authed: false,
  };
};

export default connect(mapStateToProps)(Nav);

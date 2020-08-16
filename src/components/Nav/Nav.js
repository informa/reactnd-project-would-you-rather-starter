import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Nav.module.css";
import { setAuthedUser } from "../../actions/authedUser";
import Avatar from "../Avatar/Avatar";

// TODO:
// styles:

class Nav extends React.Component {
  handleSignOut = () => {
    console.log('balls')
    this.props.dispatch(setAuthedUser(null));
  };

  render() {
    const { name, avatarURL, backgroundColor, authed } = this.props;
    return (
      <nav className={styles.nav}>
        <div className={`${styles.container} ${!authed && styles["sign-in"]}`}>
          {authed && (
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
                  to="/add"
                  exact
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
            {authed && (
              <li>
                <span className={`${styles.user} ${styles.link}`}>
                  <Avatar
                    name={name}
                    size="25px"
                    image={avatarURL}
                    backgroundColor={backgroundColor}
                  />
                  <span className={styles.name}>
                    <strong>Signed in as:</strong> {name}
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
                onClick={authed ? this.handleSignOut : undefined}
              >
                {authed ? "Logout" : "Signin"}
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
      backgroundColor: user.backgroundColor,
    };
  }

  return {
    authed: false,
  };
};

export default connect(mapStateToProps)(Nav);

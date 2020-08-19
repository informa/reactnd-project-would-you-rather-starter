import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import SignIn from "../SignIn/SignIn";

class ProtectedRoute extends React.Component {
  render() {
    const { component: Component, ...props } = this.props;

    return (
      <Route
        {...props}
        render={(props) => {
          return !this.props.loading ? (
            <Component {...props} />
          ) : (
            <SignIn {...props} />
          );
        }}
      />
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);

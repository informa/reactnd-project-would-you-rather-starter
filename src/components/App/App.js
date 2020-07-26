import React from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../../actions/shared";
import QuestionList from "../QuestionList/QuestionList";
import styles from "./App.module.css";
import "../../assets/styles/App.css";


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className={styles.page}>
        {this.props.loading === true ? null : <QuestionList />}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  };
};

export default connect(mapStateToProps)(App);

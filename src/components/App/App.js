import React from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../../actions/shared";
import LoadingBar from "react-redux-loading";
import QuestionList from "../QuestionList/QuestionList";
import QuestionDetail from "../QuestionDetail/QuestionDetail";

import styles from "./App.module.css";
import "../../assets/styles/App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className={styles.page}>
        <LoadingBar />
        {this.props.loading === true ? null : (
          <QuestionDetail match={{ params: { id: "6ni6ok3ym7mf1p33lnez" } }} />
        )}
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

import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { handleInitialData } from "../../actions/shared";
import LoadingBar from "react-redux-loading";
import QuestionList from "../QuestionList/QuestionList";
import QuestionDetail from "../QuestionDetail/QuestionDetail";
import SignIn from "../SignIn/SignIn";
import CreateQuestion from "../CreateQuestion/CreateQuestion";
import Leaderboard from "../Leaderboard/Leaderboard";
import Nav from "../Nav/Nav";
import styles from "./App.module.css";
import "../../assets/styles/App.css";

// TODO:
// Home : <QuestionList />
// QuestionDetail : <QuestionDetail match={{ params: { id: "6ni6ok3ym7mf1p33lnez" } }} />
// SignIn : <SignIn />

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <LoadingBar />
          {this.props.loading === true ? null : (
            <div className={styles.page}>
              <Nav />
              <div className={styles.container}>
                <Route path="/" exact component={QuestionList} />
                <Route path="/question/:id" component={QuestionDetail} />
                <Route path="/new" component={CreateQuestion} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/signin" component={SignIn} />
              </div>
            </div>
          )}
        </>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  };
};

export default connect(mapStateToProps)(App);

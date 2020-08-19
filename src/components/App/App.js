import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { handleInitialData } from "../../actions/shared";
import LoadingBar from "react-redux-loading";
import QuestionList from "../QuestionList/QuestionList";
import QuestionDetail from "../QuestionDetail/QuestionDetail";
import SignIn from "../SignIn/SignIn";
import CreateQuestion from "../CreateQuestion/CreateQuestion";
import Leaderboard from "../Leaderboard/Leaderboard";
import NotFound from "../NotFound/NotFound";
import QuestionNotFound from "../QuestionNotFound/QuestionNotFound";
import Nav from "../Nav/Nav";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import styles from "./App.module.css";
import "../../assets/styles/App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <LoadingBar style={{ backgroundColor: "royalBlue" }} />
          <div className={styles.page}>
            <Nav />
            <div className={styles.container}>
              <Switch>
                <PrivateRoute path="/" exact component={QuestionList} />
                <PrivateRoute path="/question/:id" component={QuestionDetail} />
                <PrivateRoute path="/add" component={CreateQuestion} />
                <PrivateRoute path="/leaderboard" component={Leaderboard} />
                <PrivateRoute
                  path="/question-not-found"
                  component={QuestionNotFound}
                />
                <Route path="/signin" component={SignIn} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </>
      </BrowserRouter>
    );
  }
}

export default connect()(App);

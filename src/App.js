import React from "react";
import * as API from "./_DATA";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    // console.log("questions: ", API._getQuestions());
    // console.log("users: ", API._getUsers());

    console.log(
      Promise.all([API._getUsers(), API._getQuestions()]).then(([users, questions]) => ({
        users,
        questions,
      }))
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

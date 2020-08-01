import React from "react";
import { connect } from "react-redux";
import styles from "./CreateQuestion.module.css";

// TODO:

const Input = ({ label, id, onChange }) => {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        className="input"
        type="text"
        name={id}
        id={id}
        onChange={onChange}
      />
    </div>
  );
};

class CreateQuestion extends React.Component {
  state = {
    options: { optionOne: { value: "" }, optionTwo: { value: "" } },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit", this.state.options);
  };

  handleOnChandle = (event) => {
    const { name, value } = event.target;
    const currentState = this.state.options;

    this.setState(() => ({
      options: {
        ...currentState,
        [name]: { value },
      },
    }));
  };

  hasValue = (value) => value !== "";

  render() {
    const { options } = this.state;

    const allFieldValues = Object.keys(options).map((option) => {
      return options[option].value;
    });

    const fieldsHaveValues = allFieldValues.every(this.hasValue);

    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card__header">
          <h2>Create new question</h2>
        </div>
        <h3>Would you rather ...</h3>
        <Input
          id="optionOne"
          label="Enter text for option one"
          onChange={this.handleOnChandle}
        />
        <h4>Or</h4>
        <Input
          id="optionTwo"
          label="Enter text for option two"
          onChange={this.handleOnChandle}
        />
        <div className="card__footer">
          <button className="button button--secondary" type="button">
            Cancel
          </button>
          <button className="button" type="submit" disabled={!fieldsHaveValues}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }) => {
  return {
    questions,
    authedUser,
  };
};

export default connect(mapStateToProps)(CreateQuestion);

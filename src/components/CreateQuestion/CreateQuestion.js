import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from "./CreateQuestion.module.css";
import PageTemplate from "../PageTemplate/PageTemplate";
import { handleNewQuestion } from "../../actions/shared";
import Card from "../Card/Card";

// TODO:
// Not sure if option object is messy {}

const Input = ({ label, value, id, onChange }) => {
  return (
    <div className="field">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input"
        type="text"
        name={id}
        id={id}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

class CreateQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.initialOptions = {
      optionOne: { value: "" },
      optionTwo: { value: "" },
    };

    this.state = {
      options: this.initialOptions,
      toHome: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { optionOne, optionTwo } = this.state.options;
    const { authedUser } = this.props;
    const author = authedUser;
    const optionOneText = optionOne.value;
    const optionTwoText = optionTwo.value;

    this.props
      .dispatch(handleNewQuestion({ author, optionOneText, optionTwoText }))
      .finally(() => {
        this.setState({
          options: this.initialOptions,
          toHome: true,
        });
      });
  };

  handleOnChange = (event) => {
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
    const { options, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to="/" />;
    }

    const allFieldValues = Object.keys(options).map((option) => {
      return options[option].value;
    });

    const fieldsHaveValues = allFieldValues.every(this.hasValue);

    return (
      <PageTemplate pageTitle="Create Question" alignCentre>
        <form onSubmit={this.handleSubmit}>
          <Card header="Would you rather ...">
            <Input
              id="optionOne"
              label="Enter text for option one"
              value={options.optionOne.value}
              onChange={this.handleOnChange}
            />
            <h4>Or</h4>
            <Input
              id="optionTwo"
              label="Enter text for option two"
              value={options.optionTwo.value}
              onChange={this.handleOnChange}
            />
            <Card.Footer>
              <button
                className="button button--secondary"
                type="button"
                onClick={() => {
                  this.setState({ toHome: true });
                }}
              >
                Cancel
              </button>
              <button
                className="button"
                type="submit"
                disabled={!fieldsHaveValues}
              >
                Submit
              </button>
            </Card.Footer>
          </Card>
        </form>
      </PageTemplate>
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

import React from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "../PageTemplate/PageTemplate";
import Card from "../Card/Card";

class QuestionNotFound extends React.Component {
  render() {
    const { location, history } = this.props;
    const questionId = location.state ? (
      <strong>id: {location.state.from}</strong>
    ) : undefined;
    return (
      <PageTemplate pageTitle="Oops we can't find this question" alignCentre>
        <Card
          footer={
            <button className="button" onClick={() => history.push(`/add`)}>
              Create new Question
            </button>
          }
        >
          <p>This question, {questionId} doesn't exist.</p>

          <p>Why not create a new one?</p>
        </Card>
      </PageTemplate>
    );
  }
}

export default withRouter(QuestionNotFound);

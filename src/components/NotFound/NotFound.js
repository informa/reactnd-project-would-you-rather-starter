import React from "react";
import PageTemplate from "../PageTemplate/PageTemplate";
import Card from "../Card/Card";

class NotFound extends React.Component {
  render() {
    return (
      <PageTemplate pageTitle="Oh dear" alignCentre>
        <Card header="404">
          <p>
            This page <strong>{this.props.location.pathname}</strong> doesn't
            exist. Please click on a link in the navigation.
          </p>
        </Card>
      </PageTemplate>
    );
  }
}

export default NotFound;

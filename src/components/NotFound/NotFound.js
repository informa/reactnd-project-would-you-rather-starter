import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from "./NotFound.module.css";
import PageTemplate from "../PageTemplate/PageTemplate";
import Card from "../Card/Card";

class NotFound extends React.Component {
  render() {
    return (
      <PageTemplate pageTitle="Ooops 404" alignCentre>
        <Card header="Would you rather ...">Blah blah</Card>
      </PageTemplate>
    );
  }
}

export default NotFound;

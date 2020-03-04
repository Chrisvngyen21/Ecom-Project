import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import SignUpForm from "./signupform";
import PageTitle from "../pagetitle";

class SignUp extends Component {
  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }

  onSubmit = feilds => {
    console.log(feilds);
  };

  render() {
    return (
      <div className="sign-up">
        <PageTitle className="sign-up-page-title" title="Register" />
        <SignUpForm onSubmit={this.onSubmit} className="sign-in-form" />
      </div>
    );
  }
}

SignUp = connect(null, actions)(SignUp);

export default SignUp;

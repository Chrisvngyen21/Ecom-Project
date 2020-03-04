import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import SignInForm from "./signinform";
import PageTitle from "../pagetitle";

class SignIn extends Component {
  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }

  onSubmit = feilds => {
    console.log(feilds);
  };

  render() {
    return (
      <div className="sign-in">
        <PageTitle className="sign-in-page-title" title="Login" />
        <SignInForm onSubmit={this.onSubmit} className="sign-in-form" />
      </div>
    );
  }
}

SignIn = connect(null, actions)(SignIn);

export default SignIn;

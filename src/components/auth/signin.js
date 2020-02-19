import React, { Component } from "react";

import SignInForm from "./signinform";
import PageTitle from "../pagetitle";

class SignIn extends Component {
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

export default SignIn;

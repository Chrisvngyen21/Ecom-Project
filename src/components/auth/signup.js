import React, { Component } from "react";

import SignUpForm from "./signupform";
import PageTitle from "../pagetitle";

class SignUp extends Component {
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

export default SignUp;

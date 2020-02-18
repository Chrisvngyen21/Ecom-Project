import React, { Component } from "react";

import SignInForm from "./signinform";

class SignIn extends Component {
  onSubmit = feilds => {
    console.log(feilds);
  };

  render() {
    return (
      <div className="sign-in">
        <SignInForm onSubmit={this.onSubmit} className="sign-in-form" />
      </div>
    );
  }
}

export default SignIn;

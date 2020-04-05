import React, { Component } from "react";

import PageTitle from "../pagetitle";
import AccountInformationForm from "./accountInformationForm";

class AccountInfo extends Component {
  onSubmit = feilds => {
    console.log(feilds);
  };

  render() {
    return (
      <div className="account-information">
        <PageTitle
          className="account-information"
          title="Account Information"
        />

        <AccountInformationForm
          onSubmit={this.onSubmit}
          className="account-information_form"
        />
      </div>
    );
  }
}

export default AccountInfo;

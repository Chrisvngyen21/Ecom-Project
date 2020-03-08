import React, { Component } from "react";

import PageTitle from "../pagetitle";

class PurchaceHistory extends Component {
  render() {
    return (
      <div className="purchase-history">
        <PageTitle
          className="purchase-history_page-title"
          title="Purchase History"
        />
      </div>
    );
  }
}

export default PurchaceHistory;

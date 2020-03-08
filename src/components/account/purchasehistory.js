import React, { Component } from "react";

import PageTitle from "../pagetitle";
import Purchases from "./purchases";
import PurchasseDetail from "./purchaseDetails";

class PurchaceHistory extends Component {
  render() {
    return (
      <div className="purchase-history">
        <PageTitle
          className="purchase-history_page-title"
          title="Purchase History"
        />

        <Purchases className="purchase-history_purchases" />

        <PurchasseDetail className="purchase-history__detail" />

        <div className="purchase-history__border-bottom"></div>
      </div>
    );
  }
}

export default PurchaceHistory;

import React, { Component } from "react";

class PurchaseDetails extends Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`${className} purchase-detail`}>
        Purchase details goes here.
      </div>
    );
  }
}

export default PurchaseDetails;

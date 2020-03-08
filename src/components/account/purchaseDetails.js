import React, { Component } from "react";

class PurchasseDetail extends Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`${className} purchase-detail`}>
        Purchase details goes here.
      </div>
    );
  }
}

export default PurchasseDetail;

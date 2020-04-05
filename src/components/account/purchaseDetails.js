import React, { Component } from "react";
import { connect } from "react-redux";

function PurchaseDetailLabel({ className, title, value }) {
  return (
    <div className={`${className} purchase-detail-label`}>
      <div className="purchase-detail-label_title">{title}</div>
      <div className="purchase-detail-label_value">{value}</div>
    </div>
  );
}

class PurchaseDetails extends Component {
  render() {
    const {
      className,
      orderNumber,
      orderDate,
      user,
      total,
      creditCard
    } = this.props;
    const { name, shippingAddress } = user;

    return (
      <div className={`${className} purchase-detail`}>
        <PurchaseDetailLabel
          className="purchase-detail_order-number"
          title="Order Number"
          value={orderNumber}
        />

        <PurchaseDetailLabel
          className="purchase-detail_order-date"
          title="Order Date"
          value={orderDate}
        />

        <PurchaseDetailLabel
          className="purchase-detail_shipping-address"
          title="Shipping Address"
          value={`${name}\n${shippingAddress}`}
        />

        <PurchaseDetailLabel
          className="purchase-detail_total"
          title="Total"
          value={total}
        />

        <PurchaseDetailLabel
          className="purchase-detail_credit-card"
          title="Credit Card"
          value={creditCard}
        />

        <a className="purchase-detail_track-shipment">Track Shipment</a>

        <a className="purchase-detail_print-receipt">Print Receipt</a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { purchaseDetails } = state.user;
  return {
    ...purchaseDetails
  };
}

PurchaseDetails = connect(mapStateToProps)(PurchaseDetails);

export default PurchaseDetails;

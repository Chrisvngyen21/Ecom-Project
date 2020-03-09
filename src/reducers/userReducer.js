import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from "../actions/types";

const INITAL_STATE = {
  purchases: [],
  purchaseDetails: {
    _id: -1,
    total: 0,
    orderNumber: "",
    orderDate: null,
    creditCard: "",
    user: {
      name: "",
      shippingAddress: ""
    }
  }
};

export default function(state = INITAL_STATE, action) {
  switch (action.type) {
    case SET_USER_PURCHASES:
      return {
        ...state,
        purchases: action.payload
      };

    case SET_PURCHASE_DETAIL:
      let purchaseDetails;
      state.purchases.map(purchase => {
        if ((purchase._id = action.payload)) {
          purchaseDetails = purchase;
        }
      });
      return {
        ...state,
        purchaseDetails
      };

    default:
      return state;
  }
}

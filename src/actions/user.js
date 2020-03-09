import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 8.02,
        orderNumber: "A00482B5",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Chris Nguyen",
          shippingAddress: "1234 West State ST"
        }
      },

      {
        _id: 1,
        total: 18.92,
        orderNumber: "L524B456",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Sylv Nguyen",
          shippingAddress: "1234 South State ST"
        }
      },

      {
        _id: 2,
        total: 81.02,
        orderNumber: "C456N789",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Christopher Nguyen",
          shippingAddress: "1234 North State ST"
        }
      },

      {
        _id: 3,
        total: 12.02,
        orderNumber: "S123N951",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Sevi Nguyen",
          shippingAddress: "1234 East State ST"
        }
      },

      {
        _id: 4,
        total: 8.02,
        orderNumber: "L159N951",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Lily Nguyen",
          shippingAddress: "1234 North-West State ST"
        }
      },

      {
        _id: 5,
        total: 14.56,
        orderNumber: "A753N951",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Alex Nguyen",
          shippingAddress: "1234 South-West State ST"
        }
      },

      {
        _id: 6,
        total: 8.33,
        orderNumber: "V852G684",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Vicente D",
          shippingAddress: "1234 North-East State ST"
        }
      },

      {
        _id: 7,
        total: 38.02,
        orderNumber: "J957T153",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "John Tran",
          shippingAddress: "1234 South-East State ST"
        }
      }
    ]
  };
}

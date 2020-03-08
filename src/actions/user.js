import { SET_USER_PURCHASES } from "./types";

export function fetchUserPurchases() {
  return({
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        title: "purchase 1",
        amout: 8.02
      },

      {
        _id: 1,
        title: "purchase 2",
        amout: 19.4
      }
    ]
  });
}

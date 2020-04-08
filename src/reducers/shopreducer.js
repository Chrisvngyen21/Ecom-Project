// import { SET_SHOP_CATEGORIES } from "../actions/types";

const INITIAL_STATE = {
  catergories: [],
  selectedCategoryId: 0,
  productsSelected: [],
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    // case SET_SHOP_CATEGORIES:
    //   return {
    //     ...state,
    //     catergories: action.payload,
    //   };
    default:
      return state;
  }
}

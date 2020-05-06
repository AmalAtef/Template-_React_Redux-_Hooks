import TYPES from "./types";

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    case TYPES.ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products]
      };

    default:
      return state;
  }
}

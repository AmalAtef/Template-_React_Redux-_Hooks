import TYPES from "../reducers/types";

export function fetchProducts() {
  return function(dispatch) {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: TYPES.FETCH_PRODUCTS,
          payload: data
        })
      );
  };
}

export function addProduct(product) {
  return function(dispatch) {
    fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: TYPES.ADD_PRODUCT,
          payload: data
        })
      );
  };
}

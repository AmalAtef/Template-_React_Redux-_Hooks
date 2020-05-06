import React, { Component } from "react";
import ShoppingItem from "./shoppingItem";

class Dropdw extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="dropdown__body">
          {/* items */}
          <ul className="dropdown__items list list--vr-separator">
            {this.props.items.map(item => (
              <ShoppingItem
                key={item.id}
                product={item}
                ondeleteInCart={this.props.ondeleteInCart}
              ></ShoppingItem>
            ))}
          </ul>
          {/* totals */}
          <div className="separator" />
          <div className="block">
            <span className="lable">Total:</span>
            <span className="lable">$2870</span>
          </div>
          {/* actions */}
          <div className="block list list--hr">
            <a className="list-item btn btn--gray" href="/">
              View Cart
            </a>
            <a className="list-item btn btn--primary" href="/">
              Checkout
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dropdw;

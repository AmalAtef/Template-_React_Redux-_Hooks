import React, { Component } from "react";
import Dropdw from "./dropdown";

class ShoppingList extends Component {
  state = {
    isopend: false
  };

  handleIsOpen = () => {
    let opend = this.state.isopend;
    //Set State
    this.setState({ isopend: !opend });
  };

  render() {
    return (
      <React.Fragment>
        {/* dropdown--opened to open */}
        <div
          className={
            "dropdown dropdown--left " +
            (this.state.isopend ? "dropdown--opened" : null)
          }
        >
          {/* header */}
          <div
            className="dropdown__header"
            style={{ cursor: "pointer" }}
            onClick={this.handleIsOpen}
          >
            <div
              className="image image--small"
              style={{
                backgroundImage: 'url("./assets/icon-cart-big.svg")'
              }}
            >
              <div className="notification notification--danger">{this.props.products.length}</div>
            </div>
          </div>
          {/* body */}
          <Dropdw items={this.props.products} ondeleteInCart={this.props.ondeleteInCart}></Dropdw>
        </div>
      </React.Fragment>
    );
  }
}

export default ShoppingList;

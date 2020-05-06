import React, { Component } from "react";
class ShoppingItem extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <li className="dropdown__item list__item">
          {/* item small 2 */}
          <div className="item-small-1">
            {/* item data */}
            <div className="item-small-1__data">
              {/* title */}
              <a href="/" className="item-small-1__title">
                {this.props.product.data[0].title} X1000
              </a>
              {/* price */}
              <span className="item-small-1__description">
                1 X $
                {this.props.product.discount
                  ? this.props.product.price - this.props.product.discount
                  : this.props.product.price}
              </span>
            </div>
            {/* item image */}
            <div className="item-small-1__image-box">
              <a
                href="/"
                className="item-small-1__image image"
                style={{
                  backgroundImage: 'url("product-1.jpg")'
                }}
              ></a>
              <a
                onClick={() => this.props.ondeleteInCart(this.props.product)}
                className="item-small-1__action"
              >
                <i className="fas fa-times" />
              </a>
            </div>
          </div>
        </li>
      </React.Fragment>
    );
  }
}

export default ShoppingItem;

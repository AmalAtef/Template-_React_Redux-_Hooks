import React, { Component } from "react";
class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="item-medium-1">
          {this.props.product.discount ? (
            <div className="item-medium-1__alert">Sale</div>
          ) : null}
          <div
            className="item-medium-1__image image"
            style={{
              backgroundImage: "url(" + [this.props.product.imageUrls[0]] + ")"
            }}
          >
            <a
              onClick={() => this.props.onAddToCart(this.props.product)}
              className="item-medium-1__action"
            >
              Add to Cart
            </a>
          </div>
          <a href="/">
            <h4>{this.props.product.data[0].title}</h4>
            <div className="flex-row">
              <div>
                {this.props.product.discount ? (
                  <del>${this.props.product.price}</del>
                ) : null}
                <span className="lable">
                  $
                  {this.props.product.discount
                    ? this.props.product.price - this.props.product.discount
                    : this.props.product.price}
                </span>
              </div>
            </div>
          </a>
          <div className="crud-actions">
            <a href="/">
              <i className="far fa-eye" />
            </a>
            <a href="/">
              <i className="fas fa-edit" />
            </a>
            <a href="/">
              <i className="fas fa-trash-alt" />
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;

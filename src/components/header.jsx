import React, { Component } from "react";

import { NavLink, Link } from "react-router-dom";
import ShoppingList from "./shoppingList";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          {/* upper header */}
          <div className="header__upper">
            {/* container */}
            <div className="container">
              {/* contact info */}
              <ul className="list list--hr list--hr-separator">
                <li className="list__item">
                  <span className="info">
                    {/* icon */}
                    <i className="info__icon far fa-dot-circle" />
                    {/* info */}
                    <span className="info__data">
                      1234 Street Name, City Name
                    </span>
                  </span>
                </li>
                <li className="list__item">
                  <a href="/" className="info">
                    {/* icon */}
                    <i className="info__icon fab fa-whatsapp" />
                    {/* info */}
                    <span className="info__data">123-456-7890</span>
                  </a>
                </li>
                <li className="list__item">
                  <a href="/" className="info">
                    {/* icon */}
                    <i className="info__icon far fa-envelope" />
                    {/* info */}
                    <span className="info__data">mail@domain.com</span>
                  </a>
                </li>
              </ul>
              {/* side menu */}
              <ul className="list list--hr">
                <li className="list__item">
                  <a href="/" className="link">
                    {/* icon */}
                    <i className="link__icon fas fa-angle-right" />
                    {/* info */}
                    About Us
                  </a>
                </li>
                <li className="list__item">
                  <a href="/" className="link">
                    {/* icon */}
                    <i className="link__icon fas fa-angle-right" />
                    {/* info */}
                    Contact Us
                  </a>
                </li>
                {/* languges */}
                <li className="list__item">
                  {/* drop down */}
                  {/* to oppen dropdown dropdown--opened */}
                  <div className="dropdown ">
                    {/* header */}
                    <div className="dropdown__header">
                      <a href="/" className="link">
                        <img className="flag flag-us" src="assets/flags.png" />
                        English
                      </a>
                      <i className="fas fa-angle-down" />
                    </div>
                    {/* items */}
                    <div className="dropdown__body">
                      <ul className="dropdown__items list">
                        <li className="dropdown__item list__item">
                          <a href="/" className="link">
                            <img
                              className="flag flag-us"
                              src="assets/flags.png"
                            />
                            English
                          </a>
                        </li>
                        <li className="dropdown__item list__item">
                          <a href="/" className="link">
                            <img
                              className="flag flag-es"
                              src="assets/flags.png"
                            />
                            Español
                          </a>
                        </li>
                        <li className="dropdown__item list__item">
                          <a href="/" className="link">
                            <img
                              className="flag flag-fr"
                              src="assets/flags.png"
                            />
                            Française
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* middle header */}
          <div className="header__middle container">
            {/* logo */}
            <a href="/" className="header__logo-box">
              <img className="header__logo" src="assets/logo.png" />
            </a>
            {/* user options */}
            <div className="header__user-options">
              {/* login control */}
              <a href="/" className="link">
                Login
              </a>
              <div className="dropdown">
                <div className="dropdown__header">
                  <div
                    className="image image--small image--circle"
                    style={{
                      backgroundImage: 'url("assets/PersonalImage.png")'
                    }}
                  ></div>
                </div>
                <div className="dropdown__body"></div>
              </div>
              {/* shopping card dropdown */}
              <ShoppingList
                products={this.props.products.filter(p => p.isInCart)}
                ondeleteInCart={this.props.ondeleteInCart}
              ></ShoppingList>
            </div>
          </div>
          {/* lower header */}
          <div className="header__lower container">
            {/* navigation */}
            <nav className="nav">
              <ul className="nav__items list list--hr">
                {/* items */}
                <li className="nav__item">
                  <NavLink className="nav__link" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="nav__item dropdown ">
                  {/* title */}
                  <NavLink
                    className="nav__link dropdown__header"
                    to="/products"
                  >
                    Products
                  </NavLink>
                  {/* items */}
                  <div className="dropdown__body">
                    <ul className=" list">
                      <li className="list__item">
                        <Link
                          className="nav__inner-link"
                          to="/products/ProductList"
                        >
                          {" "}
                          Product Listing
                        </Link>
                      </li>
                      <li className="list__item">
                        <Link
                          className="nav__inner-link"
                          to="/products/addproduct"
                        >
                          Add Product
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__link" to="/home">
                    Contacts
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__link" to="/home">
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;

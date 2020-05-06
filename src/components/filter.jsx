import React, { Component } from "react";
import Search from "./search";
class Filter extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section className="filters">
          {/* search box */}
          <Search onSearchange={this.props.onSearchange}></Search>
          {/* filter list */}
          <div>
            {/* filter header */}
            <h5>Categories</h5>
            {/* filter list */}
            <ul className="list list--vr-separator">
              {this.props.Categories.map(Category => (
                <li
                  key={Category.id}
                  onClick={() => this.props.onFilterChange(Category)}
                  className="link list__item"
                >
                  <i className="link__icon fas fa-angle-right" />
                  {Category.name}
                </li>
              ))}
            </ul>
          </div>
          {/* filter tags */}
          <div>
            {/* filter header */}
            <h5>Tags</h5>
            {/* filter tags */}
            <div className="tags">
              <span className="tag">Nike</span>
              <span className="tag">Travel</span>
              <span className="tag">Sport</span>
              <span className="tag">Tv</span>
              <span className="tag">Books</span>
              <span className="tag">Tech</span>
              <span className="tag">Addidas</span>
              <span className="tag">Promo</span>
              <span className="tag">Reading</span>
              <span className="tag">Social</span>
              <span className="tag">New</span>
              <span className="tag">Special</span>
              <span className="tag">Food</span>
              <span className="tag">Used</span>
            </div>
          </div>
          {/* related items */}
          <div>
            {/* title */}
            {/* small item */}
            <div />
            <div />
            <div />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Filter;

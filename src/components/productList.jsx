import React, { Component } from "react";
import Card from "./card";
import Filter from "./filter";
import Pagination from "./pagination";
import Sorting from "./sorting";
import _ from "lodash";

//1
import { fetchProducts } from "../actions/productActions";

//2
import { connect } from "react-redux";

class ProductList extends Component {
  componentDidMount() {
    //5
    this.props.fetchProducts();
  }

  render() {
    //search
    let filteredProducts = this.props.products;
    let sortedProduct = filteredProducts;

    if (this.props.searchText == "") {
      //Filter
      if (this.props.activeFilter) {
        filteredProducts = this.props.products.filter(
          product => product.categoryId === this.props.activeFilter
        );
      }
      //sorting
      if (this.props.activeSort) {
        if (this.props.activeSort === 1) {
          sortedProduct = _.orderBy(filteredProducts, ["price"], ["asc"]);
        } else if (this.props.activeSort === 2) {
          sortedProduct = _.orderBy(filteredProducts, ["price"], ["desc"]);
        } else if (this.props.activeSort === 3) {
          sortedProduct = _.orderBy(
            filteredProducts,
            ["data[0].title"],
            ["asc"]
          );
        }
      }
    } else {
      sortedProduct = this.props.products.filter(p =>
        p.data[0].title
          .toLowerCase()
          .includes(this.props.searchText.toLowerCase())
      );
    }
    //pagination
    const sIndex = (this.props.activePage - 1) * this.props.pageSize;
    const eIndex = sIndex + this.props.pageSize;
    const showedProducts = sortedProduct.slice(sIndex, eIndex);

    return (
      <React.Fragment>
        <Filter
          Categories={this.props.Categories}
          onFilterChange={this.props.onFilterChange}
          onSearchange={this.props.onSearchange}
        ></Filter>
        <div className="item-listing">
          <Sorting
            sortBy={this.props.sortBy}
            onSortChange={this.props.onSortChange}
          />
          <div
            className="item-listing__items item-listing--3items"
            style={{ width: "100%" }}
          >
            {showedProducts.map(pro => (
              <Card
                key={pro.id}
                product={pro}
                onAddToCart={this.props.onAddToCart}
              />
            ))}
          </div>
          {filteredProducts.length > this.props.pageSize && (
            <Pagination
              pageCount={filteredProducts.length / this.props.pageSize}
              activePage={this.props.activePage}
              onPageChange={this.props.onPageChange}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

//4
function mapStateToProps(state) {
  return {
    products: state.products.products
  };
}

//3
export default connect(mapStateToProps, { fetchProducts })(ProductList);

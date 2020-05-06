import React, { Component } from "react";
import ProductList from "./components/productList";
import Header from "./components/header";
import { Route, Switch, Redirect } from "react-router-dom";
import AddProduct from "./components/addProduct";
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  state = {
    Categories: [
      { id: 0, name: "All" },
      { id: 1, name: "Arts & Crafts" },
      { id: 2, name: "Automotive" },
      { id: 3, name: "Baby" },
      { id: 4, name: "Books" },
      { id: 5, name: "Eletronics" },
      { id: 6, name: "Women's Fashion" },
      { id: 7, name: "Men's Fashion" },
      { id: 8, name: "Health & Household" },
      { id: 9, name: "Home & Kitchen" },
      { id: 10, name: "Military Accessories" },
      { id: 11, name: "Movies & Television" },
      { id: 12, name: "Sports & Outdoors" },
      { id: 13, name: "Tools & Home Improvement" },
      { id: 14, name: "Toys & Games" }
    ],
    sortBy: [
      { id: 1, name: "Price low to high" },
      { id: 2, name: "Price high to low" },
      { id: 3, name: "Name" }
    ],
    products: [],
    pageSize: 4,
    activePage: 1,
    activeFilter: 0,
    activeSort: 1,
    searchText: ""
  };

  handleDelete = product => {
    //Clone
    //Edit
    const products = this.state.products.filter(p => p.id !== product.id);
    //Set State
    this.setState({ products });
  };

  handleInCartChange = product => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].isInCart = !products[index].isInCart;
    //Set State
    this.setState({ products });
  };

  handlePageChange = page => {
    this.setState({ activePage: page });
  };

  handleFilterChange = category => {
    this.setState({ activeFilter: category.id, activePage: 1 });
  };
  handleSortChange = sortType => {
    this.setState({ activeSort: sortType.id });
  };

  handleSearchChange = e => {
    console.log("text :", e.target.value);
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <Provider store={store}>
        <Header
          products={this.state.products}
          ondeleteInCart={this.handleDelete}
          onAddToCart={this.handleInCartChange}
          pageSize={this.state.pageSize}
          activePage={this.state.activePage}
          onPageChange={this.handlePageChange}
          Categories={this.state.Categories}
          sortBy={this.state.sortBy}
          onFilterChange={this.handleFilterChange}
          activeFilter={this.state.activeFilter}
          activeSort={this.state.activeSort}
          onSortChange={this.handleSortChange}
        ></Header>
        <main className="container">
          <Switch>
            <Route
              path="/products/addproduct"
              render={props => (
                <AddProduct {...props} Categories={this.state.Categories} />
              )}
            />
            <Route
              path="/products"
              render={props => (
                <ProductList
                  {...props}
                  onAddToCart={this.handleInCartChange}
                  pageSize={this.state.pageSize}
                  activePage={this.state.activePage}
                  onPageChange={this.handlePageChange}
                  Categories={this.state.Categories}
                  sortBy={this.state.sortBy}
                  onFilterChange={this.handleFilterChange}
                  activeFilter={this.state.activeFilter}
                  searchText={this.state.searchText}
                  activeSort={this.state.activeSort}
                  onSortChange={this.handleSortChange}
                  onSearchange={this.handleSearchChange}
                />
              )}
            />

            <Redirect from="/products/ProductList" to="/products" />
            <Route
              path="/home"
              exact
              render={props => (
                <ProductList
                  {...props}
                  onAddToCart={this.handleInCartChange}
                  pageSize={this.state.pageSize}
                  activePage={this.state.activePage}
                  onPageChange={this.handlePageChange}
                  Categories={this.state.Categories}
                  sortBy={this.state.sortBy}
                  onFilterChange={this.handleFilterChange}
                  activeFilter={this.state.activeFilter}
                  activeSort={this.state.activeSort}
                  onSortChange={this.handleSortChange}
                  onSearchange={this.handleSearchChange}
                  searchText={this.state.searchText}
                />
              )}
            />
            <Redirect from="/" to="/home" />
          </Switch>
        </main>
      </Provider>
    );
  }
}

export default App;

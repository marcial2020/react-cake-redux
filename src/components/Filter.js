
import React, { Component } from 'react';
import {filterProducts, sortProducts} from '../actions/productActions';
import {connect} from "react-redux";


 class Filter extends Component {
    render() {
        return (

          !this.props.filteredProducts ?
          (<div>Loading...</div>) : (
          <div className="filter">
            <div className="filter-result">
              {this.props.filteredProducts.length}
               Products
            </div>
            <div className="filter-sort">
              Order
              <select
                value={this.props.sort}
                onChange={(e) => this.props.sortProducts(this.props.filteredProducts, e.target.value)}
              >
                <option value="latest">Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
              </select>
            </div>
            <div className="filter-size">
              Filter{" "}
              <select
                value={this.props.size}
                onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}
              >
                <option value="">All</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          </div>)
        );
    }
}

export default connect((state) => ({
  size: state.products.size,
  sort: state.products.sort,
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
}),
{
  filterProducts,
  sortProducts
}
)(Filter);
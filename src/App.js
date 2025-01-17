import React from 'react';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
// import data from "./data.json";
import store from "./store";


class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     // products: data.products,
  //     cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")): [], //make the cart to hold item after refresh
  //     // size: "",
  //     // sort: "",
  //   };
  // }

  // createOrder = (order) => {
  //   alert("Need to save order for " + order.name);
  // }

  // removeFromCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   this.setState({
  //     cartItems: cartItems.filter((x) => x._id !== product._id)
  //   });
    
  //   localStorage.setItem(
  //     "cartItems",
  //     JSON.stringify(cartItems.filter((x) => x._id !== product._id))
  //   );  //make the cart to hold item after refresh

  // }

  // addToCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   let alreadyInCart = false;
  //   cartItems.forEach((item) => {
  //     if (item._id === product._id) {
  //       item.count++;
  //       alreadyInCart = true;
  //     }
  //   });
  //   if (!alreadyInCart) {
  //     cartItems.push({ ...product, count: 1 });
  //   }
  //   this.setState({ cartItems });
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems)); //make the cart to hold item after refresh
  // }

  // sortProducts = (event) => {
  //   //implemente
  //   const sort= event.target.value;
  //   console.log(event.target.value);
  //         this.setState((state) => ({
  //           sort: sort,
  //           products: this.state.products
  //           .slice()
  //           .sort((a, b) =>
  //             sort === "lowest"?
  //             a.price > b.price? 1: -1:
  //             sort === "highest"?
  //             a.price < b.price? 1: -1:
  //             a._id > b._id? 1: -1
  //           ),
  //         }));

  // };
  

  // filterProducts = (event) => {
  //   //implemente
  //   console.log(event.target.value);
  //   if(event.target.value === ""){
  //     this.setState({size: event.target.value, products: data.products});
  //   }else {
  //     this.setState ({
  //       size: event.target.value,
  //       products: data.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0),
  //     });
  //   }
  // }

  render(){
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/"> React Cake Store</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter
                  // count={this.state.products.length}
                  // size={this.state.size}
                  // sort={this.state.sort}
                  // filterProducts={this.filterProducts}
                  // sortProducts={this.sortProducts}
                />
                <Products
                  // products={this.state.products}
                  // addToCart={this.addToCart}
                />
              </div>
              <div className="sidebar">
                <Cart
                  // cartItems={this.state.cartItems}
                  // removeFromCart={this.removeFromCart}
                  // createOrder={this.createOrder}
                />
              </div>
            </div>
          </main>
          <footer>All right reserved</footer>
        </div>
      </Provider>
    );
  }
  
}

export default App;

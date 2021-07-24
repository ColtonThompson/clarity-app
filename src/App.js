import React, { Component } from 'react';
import Cart from './components/Cart';
import BillingAddress from './components/BillingAddress';
import Payment from './components/Payment';
import Product from './components/Product';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  state = {
    products: [
      {
        name: 'Product 1',
        desc: 'Brief Description 1',
        cost: 12,
      },
      {
        name: 'Product 2',
        desc: 'Brief Description 2',
        cost: 2,
      },
      {
        name: 'Product 3',
        desc: 'Brief Description 3',
        cost: 23,
      },
    ],
  };
  render() {
    const products = this.state;
    return (
      <React.Fragment>
        <Header />
        <div class='row'>
          <Cart dataFromParent={this.state.products} />
          <BillingAddress />
        </div>
        <Payment />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

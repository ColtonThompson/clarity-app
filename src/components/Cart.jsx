import React, { Component, Fragment } from 'react';
import Product from './Product';

class Cart extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div class='col-md-4 order-md-2 mb-4'>
          <h4 class='d-flex justify-content-between align-items-center mb-3'>
            <span class='text-muted'>Your cart</span>
            <span class='badge badge-secondary badge-pill'>3</span>
          </h4>
          <ul class='list-group mb-3'>
            {this.props.dataFromParent.map((item) => {
              return (
                <li
                  class='
                  list-group-item
                  d-flex
                  justify-content-between
                  lh-condensed
                '
                >
                  <div>
                    <h6 class='my-0'>{item.name}</h6>
                    <small class='text-muted'>{item.desc}</small>
                  </div>
                  <span class='text-muted'>${item.cost}</span>
                </li>
              );
            })}

            <li class='list-group-item d-flex justify-content-between bg-light'>
              <div class='text-success'>
                <h6 class='my-0'>Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span class='text-success'>-$5</span>
            </li>
            <li class='list-group-item d-flex justify-content-between'>
              <span>Total (USD)</span>${this.calculateTotal()}
            </li>
          </ul>

          <form class='card p-2'>
            <div class='input-group'>
              <input
                type='text'
                class='form-control'
                placeholder='Promo code'
              />
              <div class='input-group-append'>
                <button type='submit' class='btn btn-secondary'>
                  Redeem
                </button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }

  showCart() {
    return <React.Fragment></React.Fragment>;
  }

  calculateTotal() {
    let data = this.props.dataFromParent;
    let sum = -1;

    return (
      <React.Fragment>
        <strong>{sum}</strong>
      </React.Fragment>
    );
  }
}

export default Cart;

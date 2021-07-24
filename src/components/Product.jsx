import React, { Component } from 'react';

class Product extends Component {
  state = {
    productName: 'Generic Product',
    description: 'Brief Description',
    imageURL: 'https://picsum.photos/50',
    price: 12,
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <h6>{this.state.productName}</h6>
          <img
            src={this.state.imageURL}
            style={{ marginRight: 1 + 'em' }}
            alt=''
          />
          <small class='text-muted'>{this.state.description}</small>
        </div>
        <span class='text-muted'>${this.state.price}</span>
      </React.Fragment>
    );
  }
}

export default Product;

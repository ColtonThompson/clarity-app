import React, { Component } from 'react';

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer class='my-5 pt-5 text-muted text-center text-small'>
          <p class='mb-1'>&copy; 2017-2018 Company Name</p>
          <ul class='list-inline'>
            <li class='list-inline-item'>
              <a href='#'>Privacy</a>
            </li>
            <li class='list-inline-item'>
              <a href='#'>Terms</a>
            </li>
            <li class='list-inline-item'>
              <a href='#'>Support</a>
            </li>
          </ul>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;

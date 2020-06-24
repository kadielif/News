
import { Provider } from 'mobx-react';
import React, { Component } from 'react';

import Router from './src/Router';
import stores from './src/stores';


export default class App extends Component {

  render() {
    return (
      <Provider {...stores} >
        <Router />
      </Provider>
    );
  }

}

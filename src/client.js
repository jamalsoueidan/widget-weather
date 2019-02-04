import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import createStore from "./store";
import Application from './application';

const store = createStore( window.REDUX_DATA );

ReactDOM.hydrate(
  <Provider store={ store }>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
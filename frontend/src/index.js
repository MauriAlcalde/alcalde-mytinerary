import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from "redux"
import {Provider} from "react-redux"
import principalReducer from "./redux/reducers/principalReducer"
import thunk from "redux-thunk"

const miStore = createStore(principalReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={miStore}>
      <App />
  </Provider>,
  document.getElementById('root')
);



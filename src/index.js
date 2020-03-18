import React , { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import authReducer from './reducers/auth';

 const initState  = {
    isAuth: false
 }
  export let store = createStore(
    authReducer,
    initState,
    applyMiddleware(thunk)
  );
  

ReactDOM.render(
<Fragment>
    <Provider  store={store} >
        <App />
     </Provider>
  </Fragment>, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import { rootReducer } from './rootReducer';
const store = createStore(rootReducer); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);


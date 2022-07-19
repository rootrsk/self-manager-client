import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './css/main.css';
import store from './redux/store'
import { SnackbarProvider } from 'notistack';
const root = ReactDOM.createRoot(document.getElementById('root'))
// axios.defaults.baseURL ='http://localhost:3001'
axios.defaults.baseURL ='https://rsb-self-manager.herokuapp.com'
root.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </Provider>
)
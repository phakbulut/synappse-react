import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Redux Provider'ı import et
import store from './redux/Store'; // Store dosyanı import et
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './asset/css/login.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/synappse-react">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
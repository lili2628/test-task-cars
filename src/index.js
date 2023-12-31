import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store, persistor } from 'redux/store';

import App from 'components/App';
import Spinner from 'components/Spinner';

import 'modern-normalize/modern-normalize.css';
import './index.css';
import './variables.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <BrowserRouter basename="test-task-cars">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import { Provider } from 'react-redux';
import {store} from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from "./redux/store"
import {BrowserRouter} from "react-router-dom"


const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter basename="react-homework-8">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
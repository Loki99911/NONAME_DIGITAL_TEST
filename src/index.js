import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCPKTNjOGQ7aHriyKxjE45FtIWe1abkCmk',
  authDomain: 'test-firebase-38d07.firebaseapp.com',
  databaseURL:
    'https://test-firebase-38d07-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'test-firebase-38d07',
  storageBucket: 'test-firebase-38d07.appspot.com',
  messagingSenderId: '542084495385',
  appId: '1:542084495385:web:888ea42b25a9fcef51d288',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/React-team-project">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

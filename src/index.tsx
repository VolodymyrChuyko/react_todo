import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/index.scss';

import { App } from './App';
import { AuthProvider } from './components/Auth/AuthContext';

ReactDOM.render((
  <AuthProvider>
    <App />
  </AuthProvider>
), document.getElementById('root'));

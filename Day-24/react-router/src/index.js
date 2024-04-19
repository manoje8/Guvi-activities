import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import AppRoutes from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AppRoutes />
  </Router>
);

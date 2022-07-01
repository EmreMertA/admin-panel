import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import Dashboard from './Pages/Dashboard';

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/dashboard' exact element={<Dashboard />} />
          <Route path='/' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default Root;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

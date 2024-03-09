import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';

const App = () => {
  return (
    <HashRouter>
      <div style={{ backgroundColor: 'gray', height: '100vh'}}>
        <Routes>
          <Route exact path="/" Component={Dashboard} />
          <Route path="/products" Component={ProductsManagement} />
          <Route path="/orders" Component={OrdersManagement} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

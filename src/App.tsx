import React from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import SalesReport from './components/SalesReport';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Sales Management App</h1>
      <ProductForm />
      <ProductList />
      <SalesReport />
    </div>
  );
};

export default App;
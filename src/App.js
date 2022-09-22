import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProductData from './components/ProductData';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<ProductData/>} />
      </Routes>
    </div>
  );
}

export default App;

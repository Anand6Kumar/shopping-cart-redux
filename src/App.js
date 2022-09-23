import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProductData from './components/ProductData';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/ProductData' element={<ProductData/>} />
      </Routes>
      <Home/>
    </div>
  );
}

export default App;


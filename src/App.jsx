// App.js or your main routing file
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './layouts/ProductDetails';
import Header from './components/Header';
import Main from './components/Main';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path="product-details/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductInfo from './pages/ProductInfo';
import FullShipping from './pages/FullShipping';
import React from 'react'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productinfo' element={<ProductInfo />} />
        <Route path='/fullshipping' element={<FullShipping />} />
      </Routes>
    </>
  );
}

export default App;

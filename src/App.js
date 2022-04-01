import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import Homepage from './pages/homepage';
import Product from './pages/product';
import Detail from './pages/detail-product';
import Category from './pages/category';
import Complain from './pages/complain';
import Payment from './pages/payment';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/category" element={<Category />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/payment" element={<Payment />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

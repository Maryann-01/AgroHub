import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ContactUs from './components/ContactUs/ContactUs';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Products from './components/Products/Products';

function App() {
  return (
    <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="/createAccount" element={<CreateAccount/>}/>
        <Route path="/products" element={<Products/>}/>
    </Routes>
  );
}

export default App;

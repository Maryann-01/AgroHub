import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
    </Routes>
  );
}

export default App;

import React from 'react'
import agri_name from "../../images/AgriSupply.png"
import tree from "../../images/Tree.png"
import "../Navbar/Nav.css"
import { Link } from 'react-router-dom'
import Login from '../Login/Login'
const Nav = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={tree} alt="logo" className="logo_tree"/>
            <img src={agri_name} alt="Agri supply"/>
        </div>
        <div className='nav-items'>
          <p>Home</p>
          <p><Link to="/products" className='link'>Products</Link></p>
          <p><Link to="/contactUs" className='link'>Contact Us</Link></p>
        </div>
        <div className='btn-div'>
            <h4><Link to="/login" className='login-link'>Login</Link></h4>
            <button><Link to ="/createAccount" className='btn-span link'>Create Account</Link></button>
        </div>
    </div>
  )
}

export default Nav
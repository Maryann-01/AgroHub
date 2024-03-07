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
            <img src={tree} alt="logo"/>
            <img src={agri_name} alt="Agri supply"/>
        </div>
        <div className='nav-items'>
          <p>Home</p>
          <p>Products</p>
          <p><Link to="/contactUs" className='link'>Contact Us</Link></p>
        </div>
        <div className='btn-div'>
            <h4><Link to="/login" className='login-link'>Login</Link></h4>
            <button><span className='btn-span'>Create Account</span></button>
        </div>
    </div>
  )
}

export default Nav
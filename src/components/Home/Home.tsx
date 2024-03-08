import React from 'react'
import Navbar from "../Navbar/Nav"
import "../Home/Home.css"
import homeBg from "../../images/Home-bg.png"
import truck from "../../images/truck.png"
import userCheck from "../../images/user-check.png"
import cart from "../../images/shopping-cart.png"
import Team from '../Team/Team'
import Footer from '../Footer/Footer'
const Home = () => {
    const features=[
        {
          id:0,
          heading:"Quick Delivery",
          text:"AgriSupply boasts of speedy delivery service to every state in Nigeria",
          img:truck
        },
        {
            id:1,
            heading:"Fertilizer in bulk",
            text:"AgriSupply provides different kinds of fertilizers to choose from.",
            img:cart
        },
        {
            id:2,
            heading:"Customer Service",
            text:"AgriSupply customer care is reliable at all times.",
            img:userCheck
        }
    ]
  return (
    <div>
        <Navbar/>
        <div className='home-body'>
            <h3>Welcome to the one stop shop for all things fertilizer and plant growth</h3>
            <button><span>Create Account</span></button>
        </div>
        <div className='feat'>
            <h2>Platform Features</h2>
            <div className='feat-main'>
             {features.map((feat)=>(
                <div className='feat-div' key={feat.id}>
                    <img src={feat.img}/>
                    <div className='feat-text'>
                        <h3>{feat.heading}</h3>
                        <p className='feature-par'>{feat.text}</p>
                    </div>
                </div>
            ))}
            </div>

        </div>
        <div className='teams-container'>
            <Team/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Home
import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import fertilizerData from '../../fertilizerData'
import "../Products/Products.css"
const Products:React.FC = () => {
   const containersData=Array(25).fill(fertilizerData[0])
  return (
    <div>
        <Nav/>
        <div className='products-body'>
            <h3 className='products-header'>Products</h3>
            <div className="mainFert-container">
                {containersData.map((eachContainer,index)=>(
                    <div className='fertilizer-div'>
                        <img src={eachContainer.img} alt="fertilizer image"/>
                        <p key={eachContainer.index}>{eachContainer.name}</p>
                        <p key={eachContainer.index}>{eachContainer.weight}</p>
                        <div className='cartContainer'>
                           <p key={eachContainer.index}>{eachContainer.price}</p>
                            <img src={eachContainer.img2} alt="cart"/>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Products
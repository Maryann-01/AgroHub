import React from 'react'
import agri_name from "../../images/AgriSupply.png"
import tree from "../../images/Tree.png"
import facebook from "../../images/facebook.png"
import whatsapp from "../../images/whatsapp.png"
import twitter from "../../images/twitter.png"
import instagram from "../../images/instagram.png"
import "../Footer/Footer.css"
const Footer = () => {
    return (
        <div>
            <div className='foot-one'>
                <div className='logo foot-OneFirst'>
                    <img src={tree} alt="logo" className="logo_tree"/>
                    <img src={agri_name} alt="Agri supply" />
                </div>
                <div className='foot-oneSecond'>
                    <div>
                        <h4>Socials</h4>
                        <p>Reach out anytime</p>
                    </div>
                    <div className='sm-handles'>
                        <img src={facebook} alt="facebook logo" />
                        <img src={twitter} alt="twitter logo" />
                        <img src={instagram} alt="instagram logo" />
                        <img src={whatsapp} alt="whatsapp logo" />
                    </div>
                </div>

            </div>
            <hr />
            <section className="foot-two">
                <div className='footTwo-info'>
                    <p>About Us</p>
                    <p>Contact</p>
                    <p>Privacy Policy</p>
                    <p>Sitemap</p>
                    <p>Terms of Use</p>
                </div>
                <div>
                    <p>© 2000-2021, All rights reserved</p>
                </div>
            </section>
        </div>
    )
}

export default Footer
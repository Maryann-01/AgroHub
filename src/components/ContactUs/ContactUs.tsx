import React from 'react'
import agri_name from "../../images/AgriSupply.png"
import tree from "../../images/Tree.png"
import "../ContactUs/ContactUs.css"

const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className='logo'>
                <img src={tree} alt="logo" />
                <img src={agri_name} alt="Agri supply" />
            </div>
            <div className='contact-pg'>
                <div className='contact-pg-header'>
                    <h3>Get in Touch</h3>
                    <p>Reach out to our 24 hour active customer care for any enquiry you have</p>
                </div>
                <form className='contact-form'>
                    <div className="fname">
                        <label htmlFor='fname'>First Name</label>
                        <input type="text" placeholder="John" required className='input' id="fname" name="fname" />
                    </div>
                    <div className="lname">
                        <label htmlFor='lname'>Last Name</label>
                        <input type="text" placeholder="Doe" required className='input' id="lname" name="lname" />
                    </div>
                    <div className="mail">
                        <label htmlFor='email'>Email Address</label>
                        <input type="email" placeholder="Johndoe@yahoo.com" className='input' required id="email" name="email" />
                    </div>
                    <div className='txtArea'>
                        <label htmlFor="textarea">Enquiry</label>
                        <textarea placeholder='Type in your complaint...' id="textarea"></textarea>
                    </div>
                   
                    <button type='submit' className="login-btn">Submit your response</button>
                </form>
            </div>

        </div>
    )
}

export default ContactUs
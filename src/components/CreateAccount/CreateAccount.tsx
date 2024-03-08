import { useState } from 'react'
import eyeSlash from "../../images/eyeSlash.png"
import agri_name from "../../images/AgriSupply.png"
import tree from "../../images/Tree.png"
import seePassword from "../../images/seePassword.png"
import "../CreateAccount/CreateAccount.css"

const CreateAccount = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [iconToggle, setIconToggle] = useState(false)
  const [password, setPassword] = useState("")
  const toggleIcon = () => {
    setIconToggle(!iconToggle)
  }
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }
  return (
    <div>
      <div className='logo'>
        <img src={tree} alt="logo" />
        <img src={agri_name} alt="Agri supply" />
      </div>
      <div className="contact-pg">
        <h3>Create an account </h3>
        <p>Fill in the details below to get an account with us</p>
      </div>
      <form className='createacct-form'>
        <div className='name-div'>
          <div className="fname">
            <label htmlFor='fname'>First Name</label>
            <input type="text" placeholder="John" required className='input' id="fname" name="fname" />
          </div>
          <div className="lname">
            <label htmlFor='lname'>Last Name</label>
            <input type="text" placeholder="Doe" required className='input' id="lname" name="lname" />
          </div>
        </div>
        <div className='contactinfo-div'>
          <div className="mail">
            <label htmlFor='phone'>Phone Number</label>
            <input type="phone" placeholder="+234-904-7865-856" className='input' required id="phone" name="phone" />
          </div>
          <div className="mail">
            <label htmlFor='email'>Email Address</label>
            <input type="email" placeholder="Johndoe@yahoo.com" className='input' required id="email" name="email" />
          </div>
        </div>
        <div className='password-container'>
          <div className="password pwrd flex">
            <label htmlFor='password'>Password</label>
            <input type={passwordType} placeholder="**********" required className='input' id="password" name="password" />
            <div onClick={togglePassword}>
              {passwordType === "password" ? <img src={eyeSlash} alt="eye slash" /> : <img src={seePassword} />}
            </div>
          </div>
          <div className="password pwrd flex">
            <label htmlFor='password'>Confirm Password</label>
            <input type={passwordType} placeholder="**********" required className='input' id="password" name="password" />
            <div onClick={togglePassword}>
              {passwordType === "password" ? <img src={eyeSlash} alt="eye slash" /> : <img src={seePassword} />}
            </div>
          </div>
        </div>
        <button type='submit' className="login-btn">Create Account</button>
      </form>

    </div>
  )
}

export default CreateAccount
import React, { useEffect, useState } from 'react'
import eyeSlash from "../../images/eyeSlash.png"
import agri_name from "../../images/AgriSupply.png"
import tree from "../../images/Tree.png"
import seePassword from "../../images/seePassword.png"
import "../CreateAccount/CreateAccount.css"


interface ApiResponse{
  success: boolean;
  message: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

const CreateAccount = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [iconToggle, setIconToggle] = useState(false)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirm_password: ""
  })
  // const [error, setError] = useState('')
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

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const { name, value } = e.target;
   setData((prevData) => ({
     ...prevData,
     [name]: value,
   }))
 };
  // useEffect(() => {
    const  handleFormSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try{
        const url = 'http://localhost:4000/agriSupply/auth/register'
        const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
      })
      console.log("response", response)
      // if(!response.ok){
      //   throw new Error(error);
      //   )
      // }
      const responseData: ApiResponse = await response.json();
      console.log('API Response', responseData)

      const { success, message } = responseData;
      console.log('Success:', success);
      console.log('User Details:', message);
      // if(response.Success === true) {

      // }
      }catch(e) {
        console.log("e", e)
      }
    }
  // })

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
      <form className='createacct-form' onSubmit={handleFormSubmit}>
        <div className='name-div'>
          <div className="fname">
            <label htmlFor='fname'>First Name</label>
            <input type="text" placeholder="John" required className='input' id="fname" name="firstName" value={data.firstName} onChange={handleInputChange} />
          </div>
          <div className="lname">
            <label htmlFor='lname'>Last Name</label>
            <input type="text" placeholder="Doe" required className='input' id="lname" name="lastName" value={data.lastName} onChange={handleInputChange}/>
          </div>
        </div>
        <div className='contactinfo-div'>
          <div className="mail">
            <label htmlFor='phone'>Phone Number</label>
            <input type="phone" placeholder="+234-904-7865-856" className='input' required id="phone" name="phoneNumber" value={data.phoneNumber} onChange={handleInputChange}/>
          </div>
          <div className="mail">
            <label htmlFor='email'>Email Address</label>
            <input type="email" placeholder="Johndoe@yahoo.com" className='input' required id="email" name="email" value={data.email} onChange={handleInputChange}/>
          </div>
        </div>
        <div className='password-container'>
          <div className="password pwrd flex">
            <label htmlFor='password'>Password</label>
            <input type={passwordType} placeholder="**********" required className='input' id="password" name="password" value={data.password} onChange={handleInputChange}/>
            <div onClick={togglePassword}>
              {passwordType === "password" ? <img src={eyeSlash} alt="eye slash" /> : <img src={seePassword} />}
            </div>
          </div>
          <div className="password pwrd flex">
            <label htmlFor='password'>Confirm Password</label>
            <input type={passwordType} placeholder="**********" required className='input' id="cpassword" name="confirm_password" value={data.confirm_password} onChange={handleInputChange}/>
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
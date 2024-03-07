import { useState } from 'react'
import agri_name from "../../images/AgriSupply.png"
import tree from "../../images/Tree.png"
import { useNavigate } from 'react-router-dom'
import eyeSlash from "../../images/eyeSlash.png"
import seePassword from "../../images/seePassword.png"

import "../Login/Login.css"
const Login = () => {
    const navigate = useNavigate()
    const [passwordType, setPasswordType] = useState("password");
    const [iconToggle, setIconToggle] = useState(false)
    const [email, setEmail] = useState("")

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        // login is successful
        // auth token has been saved
        navigate('/');
    }
    return (
        <div>
            <div className='logo'>
                <img src={tree} alt="logo" />
                <img src={agri_name} alt="Agri supply" />
            </div>
            <div className='login-body'>
                <div className="formheader">
                    <h3>Welcome back!</h3>
                    <p>Login to continue..</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="email">
                        <label htmlFor='email'>Email Address</label>
                        <input type="email" placeholder="Johndoe@yahoo.com" className='input' required id="email" name="email" />
                    </div>
                    <div className="pwrd flex">
                        <label htmlFor='password'>Password</label>
                        <input type={passwordType} placeholder="**********" required className='input' id="password" name="password" />
                        <div onClick={togglePassword}>
                            {passwordType === "password" ? <img src={eyeSlash} alt="eye slash" /> : <img src={seePassword} />}
                        </div>
                    </div>
                    <div className="rem">
                        <div className="rm-me">
                            <div className="" >
                                <input type="checkbox" />
                            </div>
                            <p className='loggedIn'>Keep me logged in</p>
                        </div>
                        <p className="forgot">Forgot password?</p>
                    </div>
                    <button type='submit' className="login-btn">Login</button>
                </form>

            </div>
        </div>
    )
}

export default Login
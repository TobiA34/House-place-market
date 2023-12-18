import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import{ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth' 
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import "react-toastify/dist/ReactToastify.css";


function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  }) 
  const {email, password} = formData
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      //Change the value based
      [e.target.id]: e.target.value

    }))
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    const auth = getAuth()
    try {

    const userCreditial = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (userCreditial.user) {
      navigate("/");
    }
    } catch (error) {
      toast.error('Something went wrong with registration')
    }

  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">
            Welcome Back!
          </p>
        </header>
           <form onSubmit={onSubmit}>
            <input 
            type="email" 
            className="emailInput"  
            placeholder='Email' 
            id='email' 
            value={email}
            onChange={onChange}
            />

            <div className="passwordInputDiv">
              <input 
              type={showPassword ? 'text' : 'password'}className='passwordInput' placeholder='Password' 
              id='password' 
              value={password} 
              onChange={onChange}
              />
                <img src={visibilityIcon} alt="Show password" className='showPassword' 
                onClick={() => setShowPassword((prevState) => !prevState)} />
            </div>
            <Link to='/forgot-password' className='forgotPasswordLink'>
              Forgot Password
            </Link>
            <div className="signInBar">
              <p className="signInText">
                Sign In
              </p>
              <button className="signInButton">
                <ArrowRightIcon fill='white' width='34px' height='34px'/>
              </button>
            </div>
          </form>
          {/* Google OAuth */}
          <Link to='/sign-up' className='registerLink'>
            Sign up Instead
          </Link>
       </div>
    </>
  )
}

export default SignIn

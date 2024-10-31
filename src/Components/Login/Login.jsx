import React, { useState } from 'react'
import '../Common/LoginReg.css'
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [show , setshow] = useState(false)
  const [email , setemail] = useState('')
  const [password , setpassword] = useState('')
  const [emailError , setemailError] = useState('')
  const [passwordError , setpasswordError] = useState('')

  const handelemail =(e)=>{
    setemail(e.target.value)
  }
  const handelpassword =(e)=>{
    setpassword(e.target.value)
  }
  const handelsubmit =(e)=>{
     e.preventDefault()
     if(email==''){
      setemailError('Enter your email')
     }
     else{
      setemailError('')
     }
     if(password==''){
      setpasswordError('Enter your passowrd')
     }
     else{
      setpasswordError('')
     }
  }
  



  const handelshoe =()=>{
    setshow(!show)
  }
  return (
    <>
      <div className="login_section bg-black">
         <div className="login_row">
             <div className="login_row1">
              <h2>Login to your account</h2>
             </div>
             <form onSubmit={handelsubmit} className='login_row2'>
              <label>Email</label><br/>
              <input onChange={handelemail} type="text" placeholder='balamia@gmail.com' /><br/>
              <p className=' text-[10px] md:text-[12px] lg:text-[14px] text-red-600 font-poppins font-[300] absolute top-[55px] md:top-[56px] lg:top-[72px]'>{emailError}</p>
              <label>Password <span>Forgot?</span></label><br/>
              <input onChange={handelpassword} type={show?'text':'password'} placeholder='Enter your password' /><br/>
              <p className=' text-[10px] md:text-[12px] lg:text-[14px] text-red-600 font-poppins font-[300] absolute top-[119px] md:top-[128px] lg:top-[170px]'>{passwordError}</p>
              {
                show?<LuEye onClick={handelshoe} className='eye' />
                :
                <LuEyeOff  onClick={handelshoe} className='eye'/>
              }
              <button onSubmit={handelsubmit} type='submit'>Login now</button>
             </form>
             <div className="login_lastText">
              <p>Don't have an account? <span onClick={()=>navigate('/register')}>Sign up</span></p>
             </div>
         </div>
      </div>
    </>
  )
}

export default Login
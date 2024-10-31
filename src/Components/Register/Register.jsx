import React, { useState } from 'react'
import '../Common/LoginReg.css'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";


const Register = () => {
  const navigate = useNavigate()
  const [name , setname] = useState('')
  // const [email , setemail]=useState('')
  // const [password , setpassword]=useState('')
  const [nameError , setnameError]=useState('')
  // const [emailError , setemailError]=useState('')
  // const [passwordError , setpasswordError]=useState('')
  const [show , setshow]  = useState(false)

  const handelName=(e)=>{
    setname(e.target.value)
  }
//   const handelEmail=(e)=>{
//   setemail(e.target.value)
//  }
//  const handelPsaaword=(e)=>{
//   setpassword(e.target.value)
//  }
 
 const handelsubmit =(e)=>{
   e.preventDefult()
   if(name==''){
     setnameError('enter your name')
   }
 }

 const handelshow=()=>{
  setshow(!show)
 }

  return (
    <>
    <div className="account">
      <div className="account_main">
        <div className="account_text">
            <h1>Find 3D Objects, Mockups and
            Illustrations here.</h1>
            <div className="img">
            <img src="images/registerbg.png" alt="bg" />
            </div>
        </div>
        <div className="account_form">
           <div className="form_text">
            <h2>Create Account</h2>
             <div className="link">
             <div className="form_link">
            <FcGoogle  className='icon'/>
              <Link to="/"> <p>Sign up with google</p></Link>
            </div>
            <div className="form_link">
            <BsFacebook  className='icon'/>
              <Link to="/"> <p>Sign up with google</p></Link>
            </div>
             </div>
            <p className='p'> <span></span>Or<span></span></p>
           </div>
           <div className="form_main">
           <div onSubmit={handelsubmit}  className="form">
              <input onChange={handelName}  type="text" placeholder='Full name' />
              <span></span>
              <p className=' absolute left-[62px] top-[58px] md:left-[184px] md:top-[84px] text-[12px] lg:left-[471px] lg:top-[90px] lg:text-[18px] text-red-600 font-poppins font-[400]'>{nameError}</p>
              <input  type="text" placeholder='Email Address' />
              <span></span>
              {/* <p className=' absolute left-[62px] top-[68px] md:left-[184px] md:top-[84px] text-[12px] lg:left-[471px] lg:top-[90px] lg:text-[18px] text-red-600 font-poppins font-[400]'>{emailError}</p> */}
              <input  type={show?'text':'password'} placeholder='Password' />
             <span></span>
             {
              show?
              <LuEye onClick={handelshow} className='eye' />
              :
              <LuEyeOff onClick={handelshow}  className='eye'/>
             }
             {/* <p className=' absolute left-[62px] top-[78px] md:left-[184px] md:top-[84px] text-[12px] lg:left-[471px] lg:top-[90px] lg:text-[18px] text-red-600 font-poppins font-[400]'>{passwordError}</p> */}
             <button type='submit' onSubmit={handelsubmit}>Create Account</button>
           </div>
           <p className='last_text'>Already have an account? <span onClick={()=>navigate('/login')}>Login</span></p>
           </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register
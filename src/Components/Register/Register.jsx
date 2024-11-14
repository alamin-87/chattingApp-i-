import React, { useState } from 'react'
import '../Common/LoginReg.css'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, signInWithPopup } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import { Slide, toast } from 'react-toastify';
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { GoogleAuthProvider } from "firebase/auth";
// import { FacebookAuthProvider } from "firebase/auth";

const Register = () => {
  // ------------------------variable part-------------------------
  const navigate = useNavigate()
  const [show , setshow]  = useState(false)
  const [name , setname] =useState('')
  const [email , setemail] = useState('') 
  const [password , setpassword] = useState('')
  const [nameError , setnameError] = useState('')
  const [emailError , setemailError] = useState('')
  const[passwordError , setpasswordError] =useState('')
  const [loading , setloading]=useState(false)

  // --------------------firebase variable---------------------------
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  // const fbprovider = new FacebookAuthProvider();



  // ---------------function part-----------------------
  // const hnadelname=(e)=>{
  //   setname(e.target.value)
  // }
  // const handelemail=(e)=>{
  //   setemail(e.target.value)
  // }
  // const handelpswword=(e)=>{
  //   setpassword(e.target.value)
  // }
  const handelsubmit=(e)=>{
    if(!name){
      setnameError('enter your name')
    }
    if(!email){
      setemailError('enter your email')
    }
    if(!password){
      setpasswordError('enter your password')
    }
    else{
      setloading(true)
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
       const user = userCredential.user;
       sendEmailVerification(auth.currentUser)
       .then(() => {
        setloading(false)
        // ================= set user name and profile picture===================
        updateProfile(auth.currentUser, {
          displayName: name,
           photoURL: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
        }) .then(() => {

          toast.success(' Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
            });
        });
        navigate('/Login')
        // console.log('send')
         // Email verification sent!
         // ...
       });
    })
    .catch((error) => {
      setloading(false)
    const errorCode = error.code;
    const errorMessage = error.message;
    //  console.log(errorCode , errorMessage)
     if(errorCode=='auth/email-already-in-use'){
      toast.error(' Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined ,
        theme: "dark",
        transition: Slide,
        });
     }
    });
    }
  }

  const handelshow=()=>{
  setshow(!show)
 }
 //  ================================ google sign in method
 const handelGoogle=()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    navigate('/')
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
             <div onClick={handelGoogle} className="form_link">
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
           <div className="form">
              <input onChange={(e)=>{setname(e.target.value) , setnameError('')}} type="text" placeholder='Full name' />
              <span></span>
              <p>{nameError}</p>
              <input onChange={(e)=>{setemail(e.target.value) , setemailError('')}}  type="email" placeholder='Email Address' />
              <span></span>
              <p>{emailError}</p>
              <input  onChange={(e)=>{setpassword(e.target.value) , setpasswordError('')}} type={show?'text':'password'} placeholder='Password' />
             <span></span>
             <p>{passwordError}</p>
             {
              show?
              <LuEye onClick={handelshow} className='eye' />
              :
              <LuEyeOff onClick={handelshow}  className='eye'/>
             }
             {
              loading?
              <button onClick={handelsubmit} onSubmit={handelsubmit} type='submit'><ClipLoader color='#fff' /></button>
              :
              <button onClick={handelsubmit} onSubmit={handelsubmit} type='submit'>Create Account</button>
             }
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
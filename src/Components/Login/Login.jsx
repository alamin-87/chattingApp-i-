import React, { useState } from 'react'
import '../Common/LoginReg.css'
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Flip, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userData } from '../../Slices/UserSlice';
// import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  // ======================variable part
  const navigate = useNavigate()
  const [show , setshow] = useState(false)
  const [email , setemail] = useState('')
  const [password , setpassword] = useState('')
  const [emailError , setemailError] = useState('')
  const [passwordError , setpasswordError] = useState('')
  // =============firebase variable part
  const auth = getAuth();
  // const provider = new GoogleAuthProvider();
  // ================== redux variable
   const dispatch = useDispatch()
 //================function part 
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
     if(password==''){
      setpasswordError('Enter your passowrd')
     }
     else{
            signInWithEmailAndPassword(auth, email, password) //===================login promise
            .then((userCredential) => {                       //===================login succes
           // Signed in 
           const user = userCredential.user;
           if(user.emailVerified===false){                    //=================== email is not verivied login error
            toast.error('Email is not verified', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Flip,
              });
           }
           else{                                           //=========================== email verivied  login success
             navigate('/')
            console.log(user)
             // ========================= set data to the redux
             dispatch(userData(userCredential.user))
             toast.success('Login success', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Flip,
              });
              // =============set data to the local store
              localStorage.setItem('user' , JSON.stringify(userCredential.user))
           }
           // ...
            })
           .catch((error) => {                      //===========================login error
            const errorCode = error.code;
            const errorMessage = error.message;
           if(errorCode=='auth/invalid-credential'){
              toast.error('Something went wrong', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Flip,
              });
           }
           });

          }
  }
  

  const handelshoe =()=>{
    setshow(!show)
  }
//  //  ================================ google sign in method
//  const handelGoogle=()=>{
//   signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
//     navigate('/')
//  }

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
              <label>Password <span> <a href="/forgetPassword">Forgot?</a></span></label><br/>
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
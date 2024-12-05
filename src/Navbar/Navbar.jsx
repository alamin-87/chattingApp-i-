import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { FaUserPlus } from "react-icons/fa6";
import { FaUserSlash } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { BsSendPlusFill } from "react-icons/bs";


const Navbar = () => {
    // =========================nall variable
    const navigate = useNavigate()
    // ======================== redux data
    const sliceUser = useSelector((state)=> state.currentUser.value)

    //============================ all function
    const handelLogout =()=>{
        navigate('/login')
     // =================localstore data
      localStorage.removeItem('user')
    }

  return (
    <>
     <nav className='nav p-5 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] absolute top-[50%] translate-y-[-50%] right-10 rounded-sm'> 
       <div className=' flex flex-col gap-5 items-center justify-center'>
       <Link to="/allusers"> <FaUserAlt  className=' text-3xl'/>  </Link>
       <Link to="/friendrequest"> <FaUserPlus className=' text-3xl' />       </Link>
       <Link to="/blockuser"> <FaUserSlash className=' text-3xl' />       </Link>
       <Link to="/"> 
          <div className=' w-[50px] h-[50px] rounded-full bg-black border-2 border-red-500 overflow-hidden'>
            <img src={sliceUser?.photoURL} alt="" />
          </div>
       </Link>
       <Link to="/friends"> <FaUserFriends className=' text-3xl' />       </Link>
       <Link to="/"> <AiFillMessage className=' text-3xl' />       </Link>
       <button onClick={handelLogout}>
        <RiLogoutCircleRFill className=' text-3xl' />     
       </button>
       <Link to="/sendrequest"> <BsSendPlusFill className=' text-3xl' />       </Link>
       </div>
     </nav>
    </>
  )
}

export default Navbar
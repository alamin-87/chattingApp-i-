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
     <nav className='nav  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] absolute rotate-[270deg] top-[-15%] lg:rotate-0 lg:top-[50%] lg:translate-y-[-50%] right-[10.5rem] lg:right-10 rounded-sm'> 
       <div className=' p-2 lg:p-5 flex flex-col gap-5 items-center justify-center'>
       <Link to="/allusers"> <FaUserAlt  className='text-xl md:text-2xl lg:text-3xl rotate-[90deg] lg:rotate-0'/>  </Link>
       <Link to="/friendrequest"> <FaUserPlus className=' text-xl md:text-2xl lg:text-3xl rotate-[90deg] lg:rotate-0' />       </Link>
       <Link to="/blockuser"> <FaUserSlash className=' text-xl md:text-2xl lg:text-3xl rotate-[90deg] lg:rotate-0' />       </Link>
       <Link to="/"> 
          <div className=' w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-black border-2 border-red-500 overflow-hidden rotate-[90deg] lg:rotate-0'>
            <img src={sliceUser?.photoURL} alt="" />
          </div>
       </Link>
       <Link to="/friends"> <FaUserFriends className=' text-xl md:text-2xl lg:text-3xl rotate-[90deg] lg:rotate-0' />       </Link>
       <Link to="/message"> <AiFillMessage className=' text-xl md:text-2xl lg:text-3xl rotate-[90deg] lg:rotate-0' />       </Link>
       <button onClick={handelLogout}>
        <RiLogoutCircleRFill className=' text-xl md:text-2xl lg:text-3xl rotate-[90deg] lg:rotate-0' />     
       </button>
       <Link to="/sendrequest"> <BsSendPlusFill className=' text-xl md:text-2xl lg:text-3xl rotate-[90deg] lg:rotate-0' />       </Link>
       </div>
     </nav>
    </>
  )
}

export default Navbar
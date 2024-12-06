// import React from 'react'
import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import { useSelector } from "react-redux";

const MessageCompo = () => {
    // ================ redux data
    const chatUserReduxData = useSelector((state)=>state.chatuser.value)

   // ================= npm emoji input fild
    const [text, setText] = useState("");
    function handleOnEnter(text) {
      console.log("enter", text);
    }

  return (
    <>
     <section className='magbox w-full h-screen'>
        <div className=' pl-3 msg_box py-3 bg-[#FDF7F4]'>
           <div className="user_photo w-[40px] h-[40px] rounded-full overflow-hidden bg-gray-300">
            <img src={chatUserReduxData?.friendPhoto} alt="userphoto" />
           </div>
           <h2 className=' text-sm text-black font-poppins font-[600]'>{chatUserReduxData?.friendsName}</h2>
        </div>
        {/* ================user msg====================== */}
        <div className=' flex gap-[550px] p-3 w-full h-[600px] bg-[#F6F7C4]'>
            {/* ================= recive msg================== */}
            <div className='p-2 bg-[#FC8F54] w-fit rounded-lg'>

            </div>
            {/* ================= send msg================== */}
            <div className='p-2 bg-[#9694FF] w-fit rounded-lg'>
                
            </div>
        </div>
            {/* ================= input fild ================ */}
            <InputEmoji
             value={text}
             onChange={setText}
             cleanOnEnter
             onEnter={handleOnEnter}
             placeholder="Type a message"
           />
     </section>
    </>
  )
}

export default MessageCompo
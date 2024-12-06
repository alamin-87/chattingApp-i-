import React from 'react'
import MessageCompo from '../Components/Message/MessageCompo'
import MessageSideBar from '../Components/Message/MessageSideBar'

const MessagePage = () => {
  return (
    <>
    <div className='flex'>
     <MessageSideBar/>
     <MessageCompo/>
    </div>
    </>
  )
}

export default MessagePage
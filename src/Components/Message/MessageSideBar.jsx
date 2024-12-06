import React, { useEffect, useState } from 'react'
import CommonUser from '../Common/CommonUser'
import { useDispatch, useSelector } from 'react-redux'
import { getDatabase, onValue, ref } from 'firebase/database'
import { chatuserData } from '../../Slices/ChatUserSlice'

const MessageSideBar = () => {

   // ================== variable 
   const[allfriend , setallfriend]=useState([])
   // ================== redux data
   const reduxUser=useSelector((state)=>state.currentUser.value)
   const dispatch = useDispatch()
   // ================== firebase variable
   const db = getDatabase();
   // =================== function part start
   const handeruser=(userdata)=>{
     dispatch(chatuserData(userdata))
     localStorage.setItem('chatuser' , JSON.stringify(userdata))
   }

  //  ================= realtime database/ accept data
    useEffect(()=>{
        const starCountRef = ref(db, 'friends/');
        onValue(starCountRef, (snapshot) => {
            let arr=[];
          snapshot.forEach((item)=>{
            if(item.val().currentUserId== reduxUser.uid ){
               arr.push({friendId:item.val().friendId , friendsName:item.val().friendsName , friendPhoto:item.val().friendPhoto , key:item.key})
            }
            else if(item.val().friendId==reduxUser.uid){
              arr.push({friendId:item.val().currentUserId, friendsName:item.val().currentUserName , friendPhoto:item.val().currentuserPhoto, key:item.key })
            }
          })
          setallfriend(arr)
        });
    },[])



  return (
    <>
     <div className=' w-[400px] h-screen overflow-scroll bg-[#B1F0F7]'>
        <h2 className=' py-5 flex justify-center items-center text-2xl text-black font-poppins font-[700]'>Friends</h2>
        {
         allfriend.map((item)=>(
         <div onClick={()=>handeruser(item)} key={item.key} className=' mt-5 border-b-2 border-gray-300 pb-4 pl-2'>
            <CommonUser commonusername={item.friendsName} commonuserphoto={item.friendPhoto}/>
         </div>
            ))
        }
     </div>
    </>
  )
}

export default MessageSideBar
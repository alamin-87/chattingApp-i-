import React, { useEffect, useState } from 'react'
import CommonUser from '../Common/CommonUser'
import CommonBV1 from '../Common/CommonBV1'
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from 'react-redux';

const Alluser = () => {
  // ================= redux variable
  const reduxuser= useSelector((state)=>state.currentUser.value)
  // ================= state variable
  const [allUserData, setallUserData]=useState([])
  // ================= firebase variable
  const db = getDatabase();
  // ================ function part
  const handelAdd= (data)=>{
    set(push(ref(db, 'friendRequest/')), {
      senderId:reduxuser.uid,
      senderName:reduxuser.displayName,
      senderPhoto:reduxuser.photoURL,
      receverId:data.key,
      receverName:data.userName,
      receverPhoto:data.userPhoto,
    });
    // console.log(data)
  }
  // ================ get user realtime data from firebase
  useEffect(()=>{
    const starCountRef = ref(db, 'allUsers/');
    onValue(starCountRef, (snapshot) => {
      let arr=[];
      snapshot.forEach((item)=>{
        // arr.push(item.val())
        if(item.key != reduxuser.uid){
          arr.push({...item.val(),key:item.key})
        }
      })
      setallUserData(arr)
    });
  } , [])

  return (
    <>
     <section className=' py-[60px]'>
        <div className="container">
            <h2 className=' text-2xl text-black font-semibold mb-5 flex justify-center'>All User</h2>
            {
              allUserData .map((item)=>(
             <div key={item.key} className=' singleuser mb-5 flex justify-between items-center'>
                <CommonUser commonuserphoto={item.userPhoto} commonusername={item.userName}/>
                <CommonBV1 common_bv1_click={()=>handelAdd (item)} common_bv1_content={'Add+'}/>
             </div>
              ))
            }
        </div>
     </section>
    </>
  )
}

export default Alluser
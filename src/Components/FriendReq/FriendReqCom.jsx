import React, { useEffect, useState } from 'react'
import CommonUser from '../Common/CommonUser'
import CommonBV1 from '../Common/CommonBV1'
import RemoveButton from '../Common/RemoveButton'
import { useSelector } from 'react-redux'
import { getDatabase, ref, onValue, remove, set, push } from "firebase/database";

const FriendReqCom = () => {
    // =============== redux data
    const reduxUser=useSelector((state)=>state.currentUser.value)

    // ============== firebase variable
    const db = getDatabase();

    // ============= all variable
    const [allrequest,setallrequest]=useState([])
    // ============= function part
    const handenRemove=(data)=>{
       remove(ref(db,'friendRequest/' + data.key))
    }
    const handelConfirm =(friendData)=>{
      set(push(ref(db, 'friends/')), {
         friendId:friendData.senderId,
         friendsName:friendData.senderName,
         friendPhoto:friendData.senderPhoto,
         currentUserId:reduxUser.uid,
         currentUserName:reduxUser.displayName,
         currentuserPhoto:reduxUser.photoURL,
        
       });
       remove(ref(db,'friendRequest/' + friendData.key))
    }
    // =============== realtime data base
    // .........====== printing friend req data
    useEffect(()=>{
        const starCountRef = ref(db, 'friendRequest/');
        onValue(starCountRef, (snapshot) => {
           let arr=[]
           snapshot.forEach((item)=>{
            if(item.val().receverId== reduxUser.uid){
               arr.push({...item.val() , key:item.key})
            }
            // arr.push(item.val())
           })
           setallrequest(arr)
        });
    },[])
  return (
    <>
     <section className=' py-[60px]'>
        <div className="container">
            <h2 className=' text-2xl text-black font-semibold mb-5 flex justify-center'>Friend Request</h2>
            {
                allrequest.map((item)=>(
             <div key={item.key} className=' singleuser mb-5 flex justify-between items-center'>
                  <CommonUser commonuserphoto={item.senderPhoto} commonusername={item.senderName} />
                  <div className=' flex gap-5'>
                     <CommonBV1 common_bv1_click={()=>handelConfirm(item)} common_bv1_content={'Confirm'}/>
                     <RemoveButton commonRemButtonclick={()=>handenRemove(item)} commonRemButton={'Remove'}/>
                  </div>
             </div>
                ))
            }

             
        </div>
     </section>
    </>
  )
}

export default FriendReqCom
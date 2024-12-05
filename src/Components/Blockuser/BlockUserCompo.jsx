import React, { useEffect, useState } from 'react'
import CommonUser from '../Common/CommonUser'
import CommonBV1 from '../Common/CommonBV1'
import { useSelector } from 'react-redux'
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database'

const BlockUserCompo = () => {
 // ================== variable 
 const[allBlockuser , setallBlockuser]=useState([])
 // ================== redux data
 const reduxUser=useSelector((state)=>state.currentUser.value)
 // ================== firebase variable
 const db = getDatabase();
 //  ================== all function
 const handelunblock =(unblockuserdata)=>{
    set(push(ref(db, 'friends/')), {
       friendId:unblockuserdata.blockUserId,
       friendsName:unblockuserdata.blockUserName,
       friendPhoto:unblockuserdata.blockUserPhoto,
       currentUserId:reduxUser.uid,
       currentUserName:reduxUser.displayName,
       currentuserPhoto:reduxUser.photoURL,
      
     });
     remove(ref(db,'blockUsers/' + unblockuserdata.key))
  }

  // ================= realtime database/ accept data
    useEffect(()=>{
        const starCountRef = ref(db, 'blockUsers/');
        onValue(starCountRef, (snapshot) => {
            let arr=[]
           snapshot.forEach((item)=>{
             if(item.val().currentUserId == reduxUser.uid ){
                arr.push({...item.val(), key: item.key})
             }
           })
           setallBlockuser(arr)
        });
    },[])




  return (
    <>
        <section className=' py-[60px]'>
        <div className="container">
         <h2 className=' text-2xl text-black font-semibold mb-5 flex justify-center'>Block Users</h2>
          {
            allBlockuser.map((item)=>(
                <div key={item.key} className=' singleuser mb-5 flex justify-between items-center'>
                <CommonUser commonusername={item.blockUserName} commonuserphoto={item.blockUserPhoto}/>
                <div className=' flex gap-5'>
                    {/* <CommonBV1 common_bv1_content={'Unfriend'}/> */}
                    <CommonBV1 common_bv1_click={()=>handelunblock(item)} common_bv1_content={'Unblock'}/>
                </div>
             </div>
            ))
          }
        </div>
     </section>
    </>
  )
}

export default BlockUserCompo
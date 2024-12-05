import React, { useEffect, useState } from 'react'
import CommonUser from '../Common/CommonUser'
// import CommonBV1 from '../Common/CommonBV1'
import RemoveButton from '../Common/RemoveButton'
import { useSelector } from 'react-redux'
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import CommonBV1 from '../Common/CommonBV1';


const Friends = () => {
    // ================== variable 
    const[allfriend , setallfriend]=useState([])
    // ================== redux data
    const reduxUser=useSelector((state)=>state.currentUser.value)
    // ================== firebase variable
    const db = getDatabase();
    // ================== all function
    const handelBlock=(blockUserData)=>{
      set(push(ref(db, 'blockUsers/')), {
        blockUserId : blockUserData.friendId,
        blockUserName : blockUserData.friendsName,
        blockUserPhoto : blockUserData.friendPhoto,
        currentUserId : reduxUser.uid,

      });
      remove(ref(db ,'friends/' + blockUserData.key ))
    }

    // ================= realtime database/ accept data
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
     <section className=' py-[60px]'>
        <div className="container">
            <h2 className=' text-2xl text-black font-semibold mb-5 flex justify-center'>Friends</h2>
            {
                allfriend.map((item)=>(
                    <div key={item.key} className=' singleuser mb-5 flex justify-between items-center'>
                  <CommonUser  commonusername={item.friendsName}  commonuserphoto={item.friendPhoto}/>
                  <div className=' flex gap-5'>
                     {/* <CommonBV1 common_bv1_content={'Unfriend'}/> */}
                     <CommonBV1 common_bv1_click={()=>handelBlock(item)} common_bv1_content={'Block'}/>
                  </div>
                  </div>

                ))
            }
        </div>
     </section>
    </>
  )
}

export default Friends
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import CommonUser from './Common/CommonUser';
import CommonBV1 from './Common/CommonBV1';
import RemoveButton from './Common/RemoveButton';
import { useSelector } from 'react-redux';

const SendReqComp = () => {
    // =============== redux data
    const reduxUser=useSelector((state)=>state.currentUser.value)

    // ============== firebase variable
    const db = getDatabase();

    // ============= all variable
    const [allrequest,setallrequest]=useState([])

    // =============== realtime data base
    // .........====== printing friend req data
    useEffect(()=>{
        const starCountRef = ref(db, 'friendRequest/');
        onValue(starCountRef, (snapshot) => {
           let arr=[]
           snapshot.forEach((item)=>{
            if(item.val().senderId== reduxUser.uid){
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
            <h2 className=' text-2xl text-black font-semibold mb-5 flex justify-center'>All Request Send</h2>
            {
                allrequest.map((item)=>(
             <div key={item.key} className=' singleuser mb-5 flex justify-between items-center'>
                  <CommonUser commonuserphoto={item.receverPhoto} commonusername={item.receverName} />
                  <div className=' flex gap-5'>
                     <RemoveButton commonRemButton={'Remove'}/>
                  </div>
             </div>
                ))
            }

             
        </div>
     </section>
    </>
  )
}

export default SendReqComp
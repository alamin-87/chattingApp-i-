import React from 'react'

const CommonUser = ({commonuserphoto, commonusername}) => {
  return (
    <>
      <div className=' flex gap-5 items-center'>
         <div className="common_user_img w-[40px] h-[40px] rounded-full bg-gray-300 overflow-hidden">
            <img src={commonuserphoto} alt="img" />
         </div>
         <h2 className=' text-lg font-medium text-black'> {commonusername}</h2>
      </div>
    </>
  )
}

export default CommonUser
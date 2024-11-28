import React from 'react'

const CommonBV1 = ({common_bv1_content , common_bv1_click}) => {
  return (
    <>
     <div>
        <button onClick={common_bv1_click} className=' py-1 px-5 rounded-sm text-sm text-black font-semibold font-poppins bg-gray-300 active:scale-[1.1]'>{common_bv1_content}</button>
     </div>
    </>
  )
}

export default CommonBV1
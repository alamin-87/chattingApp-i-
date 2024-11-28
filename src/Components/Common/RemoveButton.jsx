import React from 'react'

const RemoveButton = ({commonRemButton , commonRemButtonclick}) => {
  return (
    <>
      <button onClick={commonRemButtonclick} className=' py-1 px-5 rounded-sm text-sm text-white font-semibold font-poppins bg-red-600 active:scale-[1.1]'>{commonRemButton}</button>
    </>
  )
}

export default RemoveButton
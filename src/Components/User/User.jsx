import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {
  // ====================Redux data
  const sliceUser = useSelector((state)=> state.currentUser.value)
  return (
    <>
 <div className="flex min-h-screen items-center justify-center">
  <div className="w-50 rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
    <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600 overflow-hidden">
      <img src={sliceUser?.photoURL} alt="userimg" />
    </figure>
    <h2 className="mt-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">{sliceUser?.displayName}</h2>
    <p className=" mb-4 text-gray-600 dark:text-gray-300">{sliceUser?.email}</p>
    {/* <p className="mb-4 text-gray-600 dark:text-gray-300">Web Developer</p> */}
    <div className="flex items-center justify-center">
      <a href="#" className="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500">Contact</a>
      <a href="#" className="ml-4 rounded-full bg-gray-300 px-4 py-2 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600">Portfolio</a>
    </div>
  </div>
 </div>

    </>
  )
}

export default User
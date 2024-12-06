import { configureStore } from '@reduxjs/toolkit'
import  UserSlice  from './UserSlice'
import  ChatUserSlice  from './ChatUserSlice'

export default configureStore({
  reducer: {

      currentUser:UserSlice,
      chatuser: ChatUserSlice,
  },
})
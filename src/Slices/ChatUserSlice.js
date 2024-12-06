import { createSlice } from '@reduxjs/toolkit'

export const ChatUserSlice = createSlice({
  name: 'chatuserslice',
  initialState: {
    value: JSON.parse(localStorage.getItem('chatuser' , )) ? JSON.parse(localStorage.getItem('chatuser' , )): null,
  },
  reducers: {
   
    
    chatuserData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { chatuserData } = ChatUserSlice.actions

export default ChatUserSlice.reducer
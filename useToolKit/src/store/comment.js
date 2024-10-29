import {createSlice} from '@reduxjs/toolkit'

const CommentSlice = createSlice({
  name: 'comment',
  initialState: [],
  reducers: {
    addComment: (state, action) => {
      return [...state, action.payload]
    },
    deleteComment: (state,action)=>{
      return state.filter((item)=> item !== action.payload)
    }
  }
})

export const CommentAction = CommentSlice.actions

export default CommentSlice
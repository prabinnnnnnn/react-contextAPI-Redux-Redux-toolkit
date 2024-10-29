import { configureStore } from "@reduxjs/toolkit";
import CommentSlice from "./comment";

const Store = configureStore({
  reducer: {
    comment: CommentSlice.reducer
  }
})

export default Store
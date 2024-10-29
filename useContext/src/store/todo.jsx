import { createContext } from "react";

export const TodoContext = createContext({
  selectComment: [],
  removeComment : ()=> {},
  AddComment: ()=> {}
})
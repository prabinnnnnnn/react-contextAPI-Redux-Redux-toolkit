import { createStore } from 'redux'

const INITIAL = {
  comment: 0,
}

const TodoReducer = (state = INITIAL, action) => {

  if (action.type == "ADD_COMMENT") {
    console.log(action.payload.input)
    const newItem = [...state.comment, action.payload.input]
    return newItem
  }
}

const TodoStore = createStore(TodoReducer)


export default TodoStore
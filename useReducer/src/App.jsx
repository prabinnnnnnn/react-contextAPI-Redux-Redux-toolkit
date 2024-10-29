import './App.css'
import { useReducer} from 'react';
import Container from './comment/container';
import { TodoContext } from './store/todo';
import ContainerLi from './comment/commentLi'


const reducer = (currentVal, action) => {

  if (action.type == "NEW_COMMENT") {

    const addComment = [...currentVal, { getItems: action.payload.getItem }]

    return addComment
  }
  
  else if (action.type == "DELETE_COMMENT") {
    const deleteComment = currentVal.filter((items) => items !== action.payload.item)
    
    return deleteComment
  }

}

function App() {

  const [Comment, dispatchComment] = useReducer(reducer, [])

  const AddComment = (getItem) => {

    const newComment = {
      type: 'NEW_COMMENT',
      payload: {
        getItem,
      }
    }
    dispatchComment(newComment)
  }

  const removeComment = (item) => {
    const deleteComment = {
      type: 'DELETE_COMMENT',
      payload: {
        item,
      }
    }
    dispatchComment(deleteComment)
  }

  return (
    <TodoContext.Provider value={{Comment, removeComment ,AddComment }}>
      
      <div className='h-screen w-full'>
        <div className='h-full w-full bg-slate-800 flex flex-col gap-y-10 justify-center items-center'>
          <Container />
          <ContainerLi></ContainerLi>
        </div>
      </div>
    </TodoContext.Provider>
  )
}

export default App;


import './App.css'
import { useReducer, useContext ,useState} from 'react';
import Container from './comment/container';
import { TodoContext } from './store/todo';
import ContainerLi from './comment/commentLi'


/* const reducer = (currentVal, action) => {

  if (action.type == "NEW_COMMENT") {

    const addComment = [...currentVal, { getItems: action.payload.getItem }]

    return addComment
  }
  
  else if (action.type == "DELETE_COMMENT") {
    const deleteComment = currentVal.filter((items) => items !== action.payload.item)
    
    return deleteComment
  }

} */

function App() {

  const [Comment, setComment] = useState([])

  const AddComment = (getItem) => {
    
    const newItem = [...Comment,{ getItems: getItem}]
    setComment(newItem)
  }

  const removeComment = (items) => {
    setComment(() => Comment.filter((item) => item !== items))
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


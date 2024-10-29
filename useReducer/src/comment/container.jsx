import { useRef } from "react"
import { useContext } from "react"
import { TodoContext } from "../store/todo"

const Container = () => {


  const {AddComment} = useContext(TodoContext)
  
  const inputReff = useRef()

  const handleClick = (event) => {
    event.preventDefault()
    const inputValue = inputReff.current.value
    inputReff.current.value = ''
    AddComment(inputValue)
  }

 
  return (
        <form onSubmit={handleClick}>
          <input type="text" ref={inputReff} className="h-[40px] rounded-sm p-2" />
          <button className='bg-slate-300 px-4 -y-2 ml-3'>Comment</button>
        </form>
  )
}

export default Container
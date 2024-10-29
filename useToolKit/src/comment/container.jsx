import { useRef } from "react"
import { useDispatch } from "react-redux"
import { CommentAction } from "../store/comment"

const Container = () => {
   
   
   const dispatch = useDispatch()
   const inputReff = useRef('')

  const handleClick = (event) => {

    event.preventDefault()
    dispatch(CommentAction.addComment(inputReff.current.value))
    inputReff.current.value = ''

  }
 
  return (

        <form onSubmit={handleClick} >
          <input type="text" ref={inputReff} className="h-[40px] rounded-sm p-2" />
          <button className='bg-slate-300 px-4 -y-2 ml-3'>Comment</button>
        </form>
  )
}

export default Container
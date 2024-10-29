import { useContext } from "react"
import { TodoContext } from "../store/todo"

const CommentLi = () => {

  const {Comment, removeComment } = useContext(TodoContext)

  return (
  <>
    {Comment.map((item)=> <div className="items flex flex-col gap-3">
      <div className='flex gap-6'>
        <p>{item.getItems }</p>
          <button className='bg-slate-300 px-4 -y-2 ml-3' onClick={()=> removeComment(item)} >X</button>
      </div>
    </div >)}
    </>
  )
}

export default CommentLi;
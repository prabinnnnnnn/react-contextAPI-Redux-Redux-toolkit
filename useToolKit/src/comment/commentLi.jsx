import { useDispatch, useSelector } from "react-redux";
import Store from "../store";
import { CommentAction } from "../store/comment";


const CommentLi = () => {

  const dispatch = useDispatch()
  const comment = useSelector(store => store.comment)

  const handleDelete = (item) => {
    dispatch(CommentAction.deleteComment(item))
  }
  
  return (
  <>
      {comment.map((cmt)=> <div className="items flex flex-col gap-3" key={cmt}>
        <div className='flex gap-6'>
          <p>{cmt}</p>
          <button className='bg-slate-300 px-4 -y-2 ml-3'onClick={()=> handleDelete(cmt)}>X</button>
        </div>
      </div >)}
    </>
  )
}

export default CommentLi;
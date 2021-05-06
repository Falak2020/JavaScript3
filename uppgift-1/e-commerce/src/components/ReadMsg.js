import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import { readMsg,login } from '../store/actions/userAction'
const ReadMsg = () => {
  
//   const _id = useSelector(state => state.userReducer.userId)
     const notice = useSelector(state => state.userReducer.message)

//   const dispatch=useDispatch()
//     useEffect(() => {
//         dispatch(readMsg(_id))
    
//     }, [notice])
    return (
        <div>
            {notice}
        </div>
    )
}

export default ReadMsg

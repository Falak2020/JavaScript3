import React from 'react'
import { useSelector } from 'react-redux'

const ReadMsg = () => {
  

     const notice = useSelector(state => state.userReducer.message)


    return (
        <div>
            <p className="p-3">Your order which has the number <mark className="text-primary">{notice}</mark> is completed</p>
        </div>
    )
}

export default ReadMsg

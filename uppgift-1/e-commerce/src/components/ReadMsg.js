import React from 'react'
import { useSelector } from 'react-redux'

const ReadMsg = () => {
  

     const notice = useSelector(state => state.userReducer.message)


    return (
        <div>
            {notice}
        </div>
    )
}

export default ReadMsg

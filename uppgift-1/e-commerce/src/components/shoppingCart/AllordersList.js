import React from 'react'
import { Link } from 'react-router-dom'

const AllordersList = ({order}) => {
    
    return (
        <div>
           <ul className="list-unstyled">
               <li >
                 <table className="table ">
                    <thead>
                        <tr className="table-warning">
                            <th scope="col">User Id</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Change To Complete</th>
                            <th scope="col">Users Orders</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>{order._id}</td>
                          <td>{order.userName}</td>
                          <td>
                            {order.paid.length>0?
                            <Link to={{
                                pathname: '/allordersdetail',
                                state: {
                                    usersOrder: {order}
                                }
                                }} >click to complete the order </Link> 
                            :''}
                          </td>

                          <td><Link to={{
                            pathname: '/usersorders',
                            state:{ usersOrder: {order}}
                            }} > Show all users orders </Link>
                          </td> 
                          
                        </tr>     
                    </tbody>
                </table>
             </li>
           </ul>
        </div>
    )
}

export default AllordersList

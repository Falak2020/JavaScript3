import React from 'react'
import { Link } from 'react-router-dom'

const AllordersList = ({order}) => {
    return (
        <div>
           <ul className="list-unstyled">
               <li >
                 <table className="table">
                    <thead>
                        <tr className="table-warning">
                            <th scope="col">User Id</th>
                            <th scope="col">Complete Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>{order._id}</td>
                          {order.paid.length>0?  
                          <td><Link to={{
                            pathname: '/allordersdetail',
                            state: {
                                order: {order}
                            }
                            }} >click to complete </Link>
                          </td>
                           :''
                        }
                          
                        </tr>     
                    </tbody>
                </table>
             </li>
           </ul>
        </div>
    )
}

export default AllordersList

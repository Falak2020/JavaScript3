import { createContext, useState } from 'react';

export const userContext = createContext();

const UserContextProvider = (props) => {
 
  const [inActive] = useState({
    name: 'fas fa-user',
  })
  const [active] = useState({
    name :'fas fa-user-check',
    color:'#008000'
  })


  return (
    <userContext.Provider value={{active,inActive}}>
      {props.children}
    </userContext.Provider>
  )
}

export default UserContextProvider;
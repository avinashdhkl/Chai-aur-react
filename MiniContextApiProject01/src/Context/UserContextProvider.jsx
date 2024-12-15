import React, { useState } from 'react'
import UserContext from './UserContext'
import { use } from 'react';

function UserContextProvider({children}) {
    const [user,setUser]= useState(null);
  return (
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
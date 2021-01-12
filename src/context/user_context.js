import React, { useContext, useEffect, useState } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';

const useAuth = () => {
  return {
    loginWithRedirect: '',
    logout: '',
    user: 'John',
    isLoading: '...',
    error: ''
  }
}

const UserContext = React.createContext();

export const UserProvider = ({children}) => {
  const {loginWithRedirect,logout, isLoading, error,user} = useAuth();
  console.log(useAuth)
  const [myUser, setMyUser] = useState(null)

  useEffect(() => {
    setMyUser(user)
  }, [user])

  return(
    <UserContext.Provider value={{
      loginWithRedirect,
      logout, 
      isLoading, 
      error,
      myUser 
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}

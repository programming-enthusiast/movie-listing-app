import React from 'react'

const AuthContext = React.createContext({
  authroize: false,
  checkAuth: false,
  backdrop: false,
  error: false,
  success: false,
})


export default AuthContext


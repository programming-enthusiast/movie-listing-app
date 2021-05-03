
import React from 'react'
import AuthContext from './AuthContext'
import { Route, Navigate } from 'react-router-dom'

const AuthRoute = ({ component: Component, ...rest }) => {

  return (
    <AuthContext.Consumer>
      {({ authorize, checkAuth }) => {
        let content = ''
        console.log('authorize, checkAuth, ', authorize, checkAuth)
        if (authorize) {
          content = (
            <Route
              render={props => (
                <Component {...props} />
              )}
              {...rest}
            />
          )
        } else {
          console.log('You must be logged in')
          content = <Navigate to="/login" />
        }
        return content
      }}
    </AuthContext.Consumer>
  )
}

export default AuthRoute
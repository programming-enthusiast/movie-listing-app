
import React from 'react'
import AuthContext from './AuthContext'
import { Navigate, Route } from 'react-router'

const AuthRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {({ authorize, checkAuth }) => {
      let content = ''

      if (authorize) {
        content = (
          <Route
            render={props => (
              <Component {...props} />
            )}
            {...rest}
          />
        )
      } else if (checkAuth && !authorize) {
        console.log('You must be logged in')
        content = <Navigate to="/" />
      }
      return content
    }}
  </AuthContext.Consumer>
)

export default AuthRoute
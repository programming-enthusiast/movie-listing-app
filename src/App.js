import 'antd/dist/antd.css'

import AppLayout from './layouts/AppLayout/AppLayout'
import Home from './routes/Home'
import Login from './routes/Login'
import Signup from './routes/Signup'

import { BrowserRouter, Routes, Link, Route, Navigate } from 'react-router-dom'
import AuthProvider from './contexts/AuthProvider'
import AuthRoute from './contexts/AuthRoute'
import MovieDataProvider from './contexts/MovieDataProvider'
import styled from 'styled-components'

function App({ className }) {
  return (
    <BrowserRouter>
      <div className={className}>
        <AuthProvider><MovieDataProvider>
          <Routes>
            <AuthRoute exact path="/">
              <AppLayout className="app-layout">
                <Home />
              </AppLayout>
            </AuthRoute>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/signup'>
              <Signup />
            </Route>
          </Routes>
        </MovieDataProvider></AuthProvider>
      </div>
    </BrowserRouter>
  )
}

export default styled(App)`
  width: 100%;
  height: 100%;
`

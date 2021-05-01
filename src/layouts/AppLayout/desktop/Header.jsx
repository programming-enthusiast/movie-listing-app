import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LogoIcon } from '../../../assets/svg/logo.svg'
import { Button } from 'antd'

const StyledButton = styled(Button)`
  border-radius: 15px;
  border-color: #4447E2;
  background: rgb(45, 45, 58);
  border-width: 0px;
  color: white;
  width: 97px;
  height: 40px;
  &:hover {
    border-width: 1px;
    background: rgb(45, 45, 58);
    border-color: #4447E2;
  }
  &:active, &:focus {
    background: rgb(45, 45, 58);
  }
`

function Header({ className }) {
  return (
    <div className={className}>
      <div className="nav-menu-wrapper">
        <LogoIcon className="logo" />
        
        <div className="nav-menu-container">
          <div className="nav-menu-item">
            <div className="nav-menu-title">
              Movies
            </div>
          </div>
          <div className="nav-menu-item">
            <div className="nav-menu-title">
              TV Shows
            </div>
          </div>
          <div className="nav-menu-item">
            <div className="nav-menu-title">
              People
            </div>
          </div>
          <div className="nav-menu-item">
            <div className="nav-menu-title">
              More
            </div>
          </div>
        </div>
      </div>
      
      <div className="right">
        <div className="join-button-container">
          <StyledButton type="default">Join</StyledButton>
        </div>
        <div className="login-button-container">
          <StyledButton type="default">Login</StyledButton>
        </div>
      </div>

      <div className="bottom-line">
      </div>
    </div>
  )
}

export default styled(Header)`
  position: relative;
  display: flex;
  height: 80px;
  background: #1C1C24;
  justify-content: space-between;
  padding-left: 7.64%;
  padding-right: 7.64%;

  .nav-menu-wrapper {
    display: flex;
  }

  .nav-menu-item {
    display: flex;
    margin: 1vw;
    color: #5F5F6F;
  }

  .nav-menu-title {
    margin: auto
  }

  .logo {
    margin: auto;
    margin-right: 1rem;
  }

  .nav-menu-container {
    display: flex;
    margin: auto;
    color: white;
  }

  .right {
    display: flex;
  }

  .join-button-container {
    margin: auto;
    margin-right: 10px;
  }

  .login-button-container {
    margin: auto;
  }

  .bottom-line {
    width: 100%;
    height: 2px;
    background: #262631;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }
`
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LogoIcon } from '../../../assets/svg/logo.svg'
import { ReactComponent as SearchIcon } from '../../../assets/svg/search.svg'
import { ReactComponent as MenuIcon } from '../../../assets/svg/menu.svg'
import { Button } from 'antd'

function Header({ className }) {
  return (
    <div className={className}>
      <MenuIcon className="menu" />
      <LogoIcon className="logo" />
      <SearchIcon className="search" />
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
  padding-left: 20px;
  padding-right: 20px;

  
  .menu {
    margin-top: auto;
    margin-bottom: auto;
  }
  .menu:hover {
    stroke: white;
    fill: white;
  }

  .logo {
    margin: auto;
  }
 
  .search {
    margin-top: auto;
    margin-bottom: auto;
  }
  .search:hover {
    stroke: white;
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
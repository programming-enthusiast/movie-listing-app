import React from 'react'
import styled from 'styled-components'

function Footer({ className }) {
  return (
    <div className={className}>
      <div className="top-line">

      </div>
      <div className="text">
        © 2021 - All Rights Reserved
      </div>
    </div>
  )
}

export default styled(Footer)`
  display: flex;
  position: fixed;
  left: 0px;
  bottom: 0px;
  background: #1C1C24;
  width: 100%;
  height: 80px;
  color: #5F5F6F;
  background: #1C1C24;

  .top-line {
    position: absolute;
    top: 0;
    left: 0;
    background: #262631;
    width: 100%;
    height: 2px;
  }

  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    margin: auto;
  }
`

import React from 'react'

import DesktopFooter from './desktop/Footer'
import DesktopHeader from './desktop/Header'
import MobileHeader from './mobile/Header'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

function AppLayout({ className, children }) {
  
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
 
  return (
    <div className={className}>
      {
        isDesktop ?
          <>
            <DesktopHeader />
            {children}
            <DesktopFooter/>
          </>
          :
          <>
            <MobileHeader />
            {children}
          </>
      }
    </div>
  )
}

export default styled(AppLayout)`
  width: 100%;
  height: 100%;
`
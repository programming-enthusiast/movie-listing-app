import React from 'react'
import styled from 'styled-components'

import MovieListingView from '../components/movie-listing/MovieListingViewer'
import {ReactComponent as ToTopIcon} from '../assets/svg/to_top.svg'
import { useMediaQuery } from 'react-responsive'

function Home({ className }) {
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
  return (
    <div className={className}>
      <MovieListingView className="movie-listing-view" />
      {
        isDesktop && 
          <a href="#top">
            <ToTopIcon className="to_top_icon" />
          </a>
      }
    </div>
  )
}

export default styled(Home)`  
  padding-top: 55px;
  padding-bottom: 100px;
  padding-left: 7vw;
  padding-right: 7vw;
  background: black;
  width: 100%;
  height: fit-content;
  min-height: 100%;
  display: flex;
  justify-content: center;

  .to_top_icon {
    position: fixed;
    right: 30px;
    bottom: 140px;
  }
`
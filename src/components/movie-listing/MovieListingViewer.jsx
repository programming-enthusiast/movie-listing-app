import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import MovieListingCard from './MovieListingCard'
import { API, POPULAR_MOVIES, API_KEY } from '../../apis/api'
import MovieDataContext from '../../contexts/MovieDataContext'
import axios from 'axios'

const StyledButton = styled(Button)`
  margin: auto;
  width: 250px;
  height: 50px;
  border-radius: 15px;
  border-color: #4447E2;
  background: rgb(45, 45, 58);
  border-width: 0px;
  color: white;

  &:hover {
    border-width: 1px;
    background: rgb(45, 45, 58);
    border-color: #4447E2;
  }
  &:active, &:focus {
    background: rgb(45, 45, 58);
  }
`

function MovieListingViewer({ className }) {
  const { popularMovieList, setPopularMovieList } = useContext(MovieDataContext)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    axios.get(`${API}${POPULAR_MOVIES}?api_key=${API_KEY}&language=en-US&page=${currentPage}`).then(res => {
      const movieList = res.data.results
      setPopularMovieList(popularMovieList.concat(movieList))
      console.log(res.data)
    }).catch(res => {

    })
  }, [currentPage])

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className={className}>
      <div className="title">
        Popular Movies
      </div>
      <div className="grid-container">
        {
          popularMovieList ? 
            popularMovieList.map((item, index) => {
              return (
                <MovieListingCard movieData={item} key={index} />
              )
            })
            :
            null
        }
      </div>
      <div className="load-more-container">
        <StyledButton type="default" onClick={handleLoadMore}>
          Load More
        </StyledButton>
      </div>
    </div>
  )
}

export default styled(MovieListingViewer)`

  width: 100%;
  
  .title {
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-gap: 20px 20px;
    justify-items: center;

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));      
    }
  }

  .load-more-container {
    width: 100%;
    height: 100px;
    display: flex;
  }
`
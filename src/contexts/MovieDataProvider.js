import React, { useState } from 'react'
import MovieDataContext from './MovieDataContext'

export default function MovieDataProvider({ children }) {
  const [popularMovieList, setPopularMovieList] = useState([])

  return (
    <MovieDataContext.Provider value={{ popularMovieList, setPopularMovieList }}>
      {children}
    </MovieDataContext.Provider>
  )
}

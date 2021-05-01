import React from 'react'
import styled from 'styled-components'
import { API, IMAGE_BASE_URL } from '../../apis/api'
import { ReactComponent as MenuButton } from '../../assets/svg/circle_menu_btn.svg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function MovieListingCard({ movieData, className }) {

  return (
    <div className={className}>
      <div className="cover-image-container">
        <img 
          className="cover-image"
          src={IMAGE_BASE_URL + movieData.poster_path} alt="movie image" 
        />
        <MenuButton className="menu-button" />
        <CircularProgressbar
          className="circular-progressbar"
          value={66}
          text={`${66}%`}
          styles={
            buildStyles({
              textSize: '32px',
              textColor: 'white',
              pathColor: 'rgba(80, 216, 106, 1)',
              trailColor: 'rgba(53, 152, 72, 1)',
              backgroundColor: 'rgb(0, 0, 0)',
              background: {
                fill: '#000000',
              },
            })
          }
        />
      </div>
      <div className="caption-wrapper">
        <div className="caption-container">
          <div className="movie-title">
            {movieData.title}
          </div>
          <div className="movie-date">
            {movieData.release_date}
          </div>
        </div>
      </div>
    </div>
  )
}

export default styled(MovieListingCard)`
  display: flex;
  flex-direction: column;
  background: #1C1C24;
  padding: 20px;
  padding-bottom: 0px;
  border-radius: 15px;
  max-width: 290px;
  height: 467px;

  @media (max-width: 768px) {
    max-width: 162px;
    height: 262px;
  }

  .cover-image {
    max-width: 250px;
    height: 358px;
    border-radius: 15px;

    @media (max-width: 768px) {
      max-width: 140px;
      height: 200px;
    }
  }

  .cover-image-container {
    position: relative;
  }

  .caption-wrapper {
    flex: 1 1 auto;
    display: flex;
    justify-content: left;
    align-items: center;
  }

  .menu-button {
    position: absolute;
    right: 10px;
    top: 10px;

    @media (max-width: 768px) {
      right: 6.7px;
      top: 6.7px;
    }
  }
  .menu-button:hover {
    opacity: 0.8;
  }

  .circular-progressbar {
    position: absolute;
    right: 10px;
    bottom: -9px;
    width: 39px;
    height: 39px;

    @media (max-width: 768px) {
      width: 19.64px;
      height: 19.64px;
    }
  }

  .caption-container {
  }

  .movie-title {
    color: white;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 9px;
    }
  }

  .movie-date {
    color: #5F5F6E;
    font-size: 14px;
    @media (max-width: 768px) {
      font-size: 7.8px;
    }
  }
`
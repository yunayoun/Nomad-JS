import React from "react";

function Movie({title,year,poster}){
  return (
    <div className="movie-container">
      <img src={poster}alt='영화포스터'/>
      <div className="movie-info">
        <h4>{title}</h4>
        <span>{year}</span>
      </div>
    </div>
)};
export default Movie;
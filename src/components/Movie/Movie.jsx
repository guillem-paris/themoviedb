import React from "react";
import './Movie.scss'

const Movie = ({movie}) => {
    return <div className="movie">
        <img src={"https://image.tmdb.org/t/p/w185"+movie.poster_path} alt={movie.title} />
        <div><p>{movie.vote_average}</p></div>
        <h4>{movie.title}</h4>
        <p>{movie.release_date}</p>
    </div>
}

export default Movie
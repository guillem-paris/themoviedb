import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../Movie/Movie.jsx'
import { useParams } from 'react-router-dom';
import './Movies.scss';

const Movies = (props) => {
    let {movieType} = useParams();
    const [movies, setMovies] = useState([]);
    if (movieType === undefined){
        movieType="popular"
    } 
    console.log(movieType + " - result")
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`)
        .then(res => setMovies(res.data.results))
        .catch(console.error)
    },[movieType])
 
    return <div className="movies">
        {/* Tipo de películas: {movieType} */}
        {movies?.map(movie=><Movie key={movie.id} movie={movie}/>)}
    </div>
}

export default Movies;
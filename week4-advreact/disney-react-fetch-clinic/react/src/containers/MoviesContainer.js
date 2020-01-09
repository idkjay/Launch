import React, { useEffect, useState } from 'react';
import MoviesIndex from ".././components/MoviesIndex"
import MovieForm from "./MovieForm"

const MoviesContainer = (props) => {
  const[movies, setMovies] = useState([])

  useEffect(() => {
    fetch("/api/v1/movies")
    .then((response) => {
      return response.json()
    })
    .then((moviesBody) => {
      setMovies(moviesBody.movies)
      //set state
    })
  }, [])

  const addNewMovie = (newMovie) => {
    fetch("/api/v1/movies", {
      method: "POST",
      body: JSON.stringify(newMovie)
    })
    .then((response) => {
      return response.json()
    })
    .then((body) => {
      //debugger
      setMovies([
        ...movies,
        body
      ])
    })

  }

  return(
    <div className="app">
      <h1> All them Disney Movies</h1>
      <MovieForm
        addNewMovie={addNewMovie}
      />
      <MoviesIndex
        movies={movies}
      />
    </div>
  )
}

export default MoviesContainer;

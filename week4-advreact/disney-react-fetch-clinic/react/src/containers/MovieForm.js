import React, {useState} from 'react';


const MovieForm = props => {

  const [movieData, setMovieData] = useState({
    title: "",
    releaseYear: "",
    runtime: ""
  })

  const handleMovieDataChange = (event) => {
    event.preventDefault()
    setMovieData({
      ...movieData,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const clearForm = (event) => {
    setMovieData({
      title: "",
      releaseYear: "",
      runtime: ""
    })
  }

  const onSubmitHandler = event => {
    event.preventDefault()

    props.addNewMovie({
      title:movieData.title,
      release_year: movieData.releaseYear,
      runtime: movieData.runtime
    })
    clearForm()
  }

  return (
    <div className="form">
      <form onSubmit={onSubmitHandler}>

        <label>
          Title:
          <input
            type="text"
            id="title"
            name="title"
            value={movieData.title}
            onChange={handleMovieDataChange}
          />
        </label>

        <label>
          Release Year:
          <input
            type="text"
            id="releaseYear"
            name="releaseYear"
            value={movieData.releaseYear}
            onChange={handleMovieDataChange}
          />
        </label>

        <label>
          Runtime:
          <input
            type="text"
            id="runtime"
            name="runtime"
            value={movieData.runtime}
            onChange={handleMovieDataChange}
          />
        </label>

        <input type="submit" className="button"></input>
      </form>
      <button className="button" onClick={clearForm}>Clear</button>
    </div>
  )
}
export default MovieForm

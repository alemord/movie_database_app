function MovieDisplay({ movie }) {

  const loaded = () => {
    return (
      <>
      <h1>{movie.Title}</h1>
      
      <h2>{movie.Genre}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>Director: {movie.Director}</h2>
      <h2>Year: {movie.Year}</h2>
      <h2>Actors: {movie.Actors}</h2>
      <h2>IMDb Rating: {movie.imdbRating}</h2>
      <h2>Awards: {movie.Awards}</h2>
    </>
    )
  }

  const loading = () => <h2>Insert Movie Title</h2>;

  return movie ? loaded() : loading();
}

export default MovieDisplay;
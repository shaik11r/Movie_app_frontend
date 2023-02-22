import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

function Movies() {
  const { loading, movies } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading....</h1>
      </div>
    );
  }
  return (
    <section className="movies">
      {movies?.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
        return (
          <Link to={`/movies/${id}`} key={id} className="movie">
            <article>
              <img src={poster} alt={title}></img>
              <div className="movie-info">
                <h4 className="title">Title:{title}</h4>
                <h4 className="year">Year:{year}</h4>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
}

export default Movies;

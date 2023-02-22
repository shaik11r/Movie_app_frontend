import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

function SingleMovie() {
  const { id } = useParams(); //we can get id from useParams
  console.log(id);
  const { loading, error, data: movie } = useFetch(`&i=${id}`);
  if (loading) {
    return <div className="loading">Loading....</div>;
  }
  if (error.show) {
    return (
      <div>
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;

  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          Back to movies
        </Link>
      </div>
    </section>
  );
}

export default SingleMovie;

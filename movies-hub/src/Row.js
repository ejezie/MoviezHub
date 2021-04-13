import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const baseUrlPoster = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // make api request on page load
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  //   console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className="row-poster"
              src={`${baseUrlPoster}${movie.poster_path}`}
              alt={title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;

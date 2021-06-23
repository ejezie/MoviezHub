import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import "./Banner.css"

const baseUrlPoster = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    //   console.log(movie);
    }
    fetchData();
  }, []);
  
  function truncate(str, n){
    return str?.lenght > n ? str.substr(0, n-1) + "..." : str;
  }

  const overviewBanner = movie?.overview;

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("${baseUrlPoster}${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="banner-content">
          <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner-overview">{overviewBanner.substring(0, 50)}...</div>
          <button  className="banner-button">Preview</button>
      </div>
      <div className="banner-fade"></div>
    </header>
  );
}

export default Banner;

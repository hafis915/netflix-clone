import React, { useEffect, useState } from "react";
import "./Row.css";
const getMovies = require("./fetchData");

function Row({ title, url, isLargeRow }) {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const moviesdata = await getMovies(url);
      setMovies(moviesdata.results);
      return moviesdata;
    };

    fetchData();
  }, [url]);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              key={movie?.id}
              src={`${baseUrl}${
                isLargeRow ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie?.original_name}
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default Row;

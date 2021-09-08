import "./Poster.css";
import React, { useEffect, useState } from "react";
import getMovies from "./fetchData";
import { useDispatch, useSelector } from "react-redux";
import { addTofavorite, selectFavorite } from "./features/favSlice";
function Poster({ url }) {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavorite);

  useEffect(() => {
    const fetchData = async () => {
      const moviesdata = await getMovies(url);
      const idx = Math.floor(Math.random() * 21);
      setMovies(moviesdata.results[idx]);
      return moviesdata;
    };

    fetchData();
  }, [url]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const addToFav = () => {
    console.log(favorite);
    dispatch(
      addTofavorite({
        name: "TEST",
      })
    );
  };

  return (
    <header
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseUrl}${movies?.poster_path})`,
        backgroundPosition: "center center",
      }}
      className="banner"
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button" onClick={addToFav}>
            My List
          </button>
        </div>

        <h1 className="banner__desc">{truncate(movies?.overview, 150)}</h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Poster;

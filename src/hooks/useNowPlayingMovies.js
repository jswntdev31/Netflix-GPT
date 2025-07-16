import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingsMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const nowPlayingsMovies = useSelector(
    (store) => store.movies.nowPlayingsMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingsMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingsMovies && getNowPlayingMovies();
  }, []);
  
};

export default useNowPlayingMovies;

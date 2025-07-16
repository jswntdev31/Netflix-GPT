import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingsMovies && (
      <div className="bg-black">
        <div className="my-0 md:-my-52 pl:2 md:pl-6 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingsMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upComingMovies}
          />
          
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

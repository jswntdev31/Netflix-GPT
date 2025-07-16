import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies[1].poster_path);
  // console.log(movies[0]);
  
  return (
    <div className="px-6  overflow-hidden">
      <h1 className="text-lg md:text-3xl text-white py-4 ">{title}</h1>
      <div className="flex overflow-x-auto  space-x-4 no-scrollbar ">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

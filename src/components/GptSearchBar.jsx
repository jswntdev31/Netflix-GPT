import client from "../utils/huggingFace";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const movieSearchTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
       API_OPTIONS 
    );
    const json = await data.json();
    return json?.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    //Make an Api call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movie for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seprated like the example result given ahead. Example Result: Gadar , Sholay , Don, Golmaal, Koi Mil Gaya";

    const chatCompletion = await client.chatCompletion({
      provider: "nebius",
      model: "deepseek-ai/DeepSeek-V3-0324",
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
    });

     if (!chatCompletion?.choices) {
      return;
    }
   
    const gptMovies = chatCompletion?.choices[0]?.message?.content.split(",");
    
    const promiseArray = gptMovies.map((movie)=> movieSearchTMDB(movie))

    const tmdbResults = await Promise.all(promiseArray)
    console.log(tmdbResults);
    console.log(gptMovies);
    

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}))
    
    
  };

  return (
    <div className="pt-[42%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 grid grid-cols-12 bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-2 m-4 col-span-9 bg-white"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-3 m-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

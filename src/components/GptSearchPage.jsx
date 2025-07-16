import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions"
import {BG_IMG} from "../utils/constants"

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="h-screen  md:w-screen object-cover" src={BG_IMG} alt="BG_LOGO" />
      </div>
      <div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
      </div>
    </div>
  )
}

export default GptSearchPage
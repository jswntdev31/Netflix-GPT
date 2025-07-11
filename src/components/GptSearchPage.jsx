import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions"
import {BG_IMG} from "../utils/constants"

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_IMG} alt="BG_LOGO" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage
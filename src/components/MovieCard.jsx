import {IMG_CDN_URL} from "../utils/constants"

 const MovieCard = ({posterPath}) => {
  return (
    <div className="w-28 md:w-40 mr-4">
      <img src={IMG_CDN_URL + posterPath} alt="Movie card" />
    </div>
  )
}

export default MovieCard
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6  w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-10 text-xl  rounded-lg  cursor-pointer hover:bg-gray-300">
          ▷ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-10 text-xl  bg-opacity-50 rounded-lg cursor-pointer">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

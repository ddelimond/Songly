import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";


const SongCard = ({ song, i, isPlaying, activeSong, data }) => {

  const dispatch = useDispatch()

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ data, i, song }));
    dispatch(playPause(true))
  }




  return (<div className=" flex flex-col w-[250px] p-4 bg-[#d6c9b1]/30 
  bg-opacity-85 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <div className="relative w-full h-56 group ">
      <div className={`absolute inset-0 justify-center items-center
       bg-black bg-opacity-50 group-hover:flex
${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}
       `}>
        <PlayPause
          song={song}
          handlePlay={handlePlayClick}
          handlePause={handlePauseClick}
        />
      </div>
      <img src={song.images?.coverart || '/src/images/album_art_itunes_by_stainless2_d3kxnbe.png'} />
    </div>
    <div className="mt-4 flex flex-col" >
      <p className="font-semibold text-lg text-white truncate">
        <Link to={`/songs/${song?.key}`}>
          {song.title}
        </Link>
      </p>
      <p className=" text-sm truncate text-gray-300 mt-1">
        <Link to={song.artists ? `/artists/${song?.artists[0?.adamid]}` : '/top/artists'}>
          {song.subtitle}
        </Link>
      </p>
    </div>
  </div >)

}

export default SongCard;

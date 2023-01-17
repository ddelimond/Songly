import { Error, SongCard, Loader } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { useDispatch, useSelector } from 'react-redux';



const Discover = () => {
    const { data, isFetching, error } = useGetTopChartsQuery();
    const genreTitle = "Pop";
    const dispatch = useDispatch()
    const { activeSong, isPlaying } = useSelector((state) => state.player)

    if (isFetching) return <Loader title="Loading songs..." />
    if (error) return <Error />

    return (
        <div className=" flex flex-col">
            <div className="w-full flex justify-between items-center
            sm:flex-row flex-col mt-4 mb-10">
                <h2 className=' font-bold text-3xl text-left text-white'>Discover {genreTitle}</h2>
                <select
                    onClick={() => { }}
                    // value=""
                    className="bg-black text-grey-300 text-sm rounded-lg outline-none sm:mt-0 mt-5 text-white">
                    {genres.map((genre) =>
                        <option key={genre.value} value={genre.value}> {genre.title}</option>
                    )}
                </select>

            </div>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((song, i) => (
                    <SongCard key={song.key} data={data} song={song} i={i} isPlaying={isPlaying} activeSong={activeSong} />
                ))
                }
            </div>
        </div >
    );
};

export default Discover;

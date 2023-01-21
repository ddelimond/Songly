import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const AroundYou = () => {
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(true)
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const { data, isFectching, error } = useGetSongsByCountryQuery(country)
    console.log(country)

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?
        apiKey=at_AGtqs2HukZI6v9wpBsd2XJb6RHjJM`)
            .then((res) => setCountry(res?.data?.location?.country))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
        // import.meta.env.VITE_geo
    }, [country])

    if (isFectching && loading) return <Loader title="Loading songs in your country, Please wait..." />
    if (error && country) return <Error />


    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-[#20615B] text-left mt-4 mb-10'>
                Around You
                <span className='text-[white]'> ({country})</span>
            </h2>

            <div className='flex flex-wrap sm:justify-start'>
                {data?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        i={i}
                        data={data}

                    />
                ))}
            </div>
        </div>
    )
};

export default AroundYou;

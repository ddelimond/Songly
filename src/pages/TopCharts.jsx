import React from 'react';
import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const AroundYou = () => {

    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const { data, isFectching, error } = useGetTopChartsQuery()

    if (isFectching) return <Loader title="Loading songs on the Top Charts, Please wait..." />
    if (error) return <Error />


    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-[#20615B] text-left mt-4 mb-10'>
                Discover Top Charts
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


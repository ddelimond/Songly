
import React from 'react'
import SongBar from './SongBar'

const RelatedSongs = ({ data, songsArr, activeSong, isPlaying, artistId, handlePlayClick, handlePauseClick }) => {
  console.log(data)
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-3xl text-white'>Related Songs:</h1>

      <div className='mt-6 w-full flex flex-col'>
        {
          songsArr ?
            songsArr?.map((song, i) => {
              < SongBar
                key={`${song.id}`}
                song={song}
                i={i}
                artistId={artistId}
              />
            })
            :
            data?.map((song, i) => (

              < SongBar
                key={`${song.id}`}
                i={i}
                song={song}
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
              />
            ))
        }
      </div>
    </div>
  )
}

export default RelatedSongs
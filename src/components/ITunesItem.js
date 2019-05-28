import React from 'react';

const ITunesItem = ({ title, artist, genre, img, release, rights, price, preview }) => {
    return (
        <div className='item'>
            <div className='cover-photo'>
                <img src={img} alt="cover"></img>
            </div>
            <div className='all-info'>
                <h4>{title}</h4>
                <p className='artist'>{artist}</p>
                <p className='genre'>{genre}</p>
                <audio className='audio'
                    controls
                    src={preview}>
                </audio>
                <p className='price'>{price}</p>
                <p className='release'><span className='release-span'>Released: </span>{release}</p>
                <p className='rights'>{rights}</p>
            </div>
        </div>
    )
}

export default ITunesItem;
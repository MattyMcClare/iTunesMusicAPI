import React from 'react';
import ITunesItem from './ITunesItem'

const ITunesList = ({ songs }) => {
    const songsItems = songs.map(song => {
        return (
            <ITunesItem
                key={song.id.attributes['im:id']}
                artist={song['im:artist'].label}
                title={song['im:name'].label}
                genre={song.category.attributes.label}
                img={song['im:image'][2].label}
                release={song['im:releaseDate'].attributes.label}
                rights={song.rights.label}
                price={song['im:price'].label}
                preview={song.link[1].attributes.href}
            >
            </ITunesItem>
        )

    })
    return (
        <div className='itunes-list'>
            <h1>Apple Music Top 20 <span className='h1-span'>PREVIEW</span></h1>
            <hr className="hr"></hr>
            {songsItems}
        </div>
    )
}

export default ITunesList;
import React, { Component } from 'react';
import ITunesList from '../components/ITunesList';

class ITunesBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        const url = 'http://itunes.apple.com/gb/rss/topsongs/limit=20/json'
        fetch(url)
            .then(res => res.json())
            .then((songs) => {
                this.setState({ songs: songs.feed.entry })
            })
    }

    render() {
        return (
            <div className="itunes-box">

                <ITunesList songs={this.state.songs} />
            </div>
        )
    }

}

export default ITunesBox;
import React , { Component } from 'react';
import '../styles/Playlist.css';
import '../styles/General.css';
import icon from '../images/music-icon.png';
import { playlistData } from "../constants/URLs";


export default class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: null,
            listShown: false
        };
        this.clickBtn = this.clickBtn.bind(this);
        this.clickTrack = this.clickTrack.bind(this);

    }

    componentDidMount() {
        fetch(playlistData)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    playlist: data
                });
            });
    }

    clickBtn() {
        this.setState({
            listShown: true
        });
    }

    clickTrack(e) {
        let index = this.state.playlist.labels.map(el => {return el.title}).indexOf(e.target.innerHTML);
        document.getElementById("youtubeID").src = this.state.playlist.labels[index].url;
    }

    render() {

        const trackList = this.state.listShown === true ?
            this.state.playlist.labels.map(item => <span className="item" onClick={this.clickTrack} key={item.title}>{item.title}</span>)
            : null;

        const player = this.state.listShown === true ?
            <iframe id="youtubeID" title="youtube" className="video" src={this.state.playlist.labels[0].url} frameBorder="0" allowFullScreen/>
            : null;

        const image = this.state.listShown === false ? <img src={icon} alt="music-icon" className="image"/> : null;

        return <div className="container">
            <h1 className="header" onClick={this.clickBtn}>Playlist</h1>
            <div className="table">
                {trackList}
            </div>
            {player}
            {image}
        </div>;
    }
}
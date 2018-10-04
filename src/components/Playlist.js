import React , { Component } from 'react';
import '../styles/Playlist.css';
import icon from '../images/music-icon.png';
import CustomPlaylist from "./CustomPlaylist";
import DefaultPlaylist from "./DefaultPlaylist";

export default class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuShown: false,
        };
        this.clickBtn = this.clickBtn.bind(this);
    }

    clickBtn() {
        this.setState({
            menuShown: !this.state.menuShown
        });
    }

    render() {
        const image = this.state.menuShown === false ? <img src={icon} alt="music-icon" className="image"/> : null;
        const menu = this.state.menuShown ?
            <div>
                <DefaultPlaylist/>
                <CustomPlaylist/>
            </div> : null;

        return <div className="container">
            <h1 className="header" onClick={this.clickBtn}>Playlist</h1>
            {menu}
            {image}
        </div>;
    }
};
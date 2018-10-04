import React from 'react';
import { connect } from 'react-redux';
import CustomPlaylistForm from "./CustomPlaylistForm";

const mapStateToProps = state => {
    return {
        tracks: state.tracks
    };
};

class ConnectedPlaylist extends React.Component {

    constructor() {
        super();
        this.state = {
            hidden: true
        };
        this.clickBtn = this.clickBtn.bind(this);
        this.clickTrack = this.clickTrack.bind(this);
    }

    clickBtn() {
        this.setState({
            hidden: !this.state.hidden
        });
    }

    clickTrack(e) {
        let index = this.props.tracks.map(el => {return el.track}).indexOf(e.target.innerHTML);
        document.getElementById("youtubeIDCustom").src = this.props.tracks[index].url;
    }

    render() {

        const customPlaylist = !this.state.hidden ?
            <div>
                <CustomPlaylistForm/>
                {this.props.tracks.map(item => (
                    <span className="item" key={item.id} onClick={this.clickTrack}>{item.track}</span>
                ))}
            </div> : null;

        const player = this.props.tracks[0] && !this.state.hidden ?
            <iframe id="youtubeIDCustom" title="youtube" className="video" src={this.props.tracks[0].url} frameBorder="0" allowFullScreen/>
            : null;

        return <div>
            <h2 className="header" onClick={this.clickBtn}>Custom Playlist</h2>
            {customPlaylist}
            {player}
        </div>
    }
}

const CustomPlaylist = connect(mapStateToProps)(ConnectedPlaylist);

export default CustomPlaylist;
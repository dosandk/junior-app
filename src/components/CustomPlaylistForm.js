import React, { Component } from "react";
import { connect } from "react-redux";
import { addTrack } from "../actions/playlistAction";
import uuidv1 from "uuid";

const mapDispatchToProps = dispatch => {
    return {
        addTrack: (track) => dispatch(addTrack(track))
    };
};

class ConnectedForm extends Component {
    constructor() {
        super();

        this.state = {
            track: "",
            url: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const {track, url} = this.state;
        const id = uuidv1();
        this.props.addTrack({track, url, id});
        this.setState({
            track: "",
            url: ""
        });
    }

    render() {
        const { track, url } = this.state;

        return <form onSubmit={this.handleSubmit}>
            <div className="label">
                <label htmlFor="track"> Track title: </label>
                <input
                    type="text"
                    id="track"
                    value={track}
                    onChange={this.handleChange}
                />
                <label htmlFor="url"> URL: </label>
                <input
                    type="text"
                    id="url"
                    value={url}
                    onChange={this.handleChange}
                />
            </div>
            <button type="submit" className="button">Add</button>
        </form>
    }
}

const CustomPlaylistForm = connect(null, mapDispatchToProps)(ConnectedForm);

export default CustomPlaylistForm;
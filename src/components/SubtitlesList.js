import React, { Component } from "react";
import SubtitleText from './SubtitleText';
import '../styles/General.css';

export default class Subtitles extends Component {
    constructor(props) {
        super(props);
        this.state ={
            subtitleText: null,
            subtitleListShown: this.props.subtitlesShown
        };
        this.clickSubtitle = this.clickSubtitle.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.subtitleListShown !== nextProps.subtitlesShown) {
            this.setState({
                subtitleListShown: nextProps.subtitlesShown,
                subtitleText: null
            })
        };
    }

    clickBtn() {
        this.setState({
            subtitleText: null,
            subtitleListShown: !this.state.subtitleListShown
        })
    }

    clickSubtitle(e) {
        let index = this.props.subtitles.map(el => {return el.item}).indexOf(e.target.innerHTML);
        let url = this.props.subtitles[index].url;
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    subtitleText: data.text,
                    subtitleListShown: !this.state.subtitleListShown
                });
            });
    }

    render() {

        const list = this.state.subtitleListShown ? <div className="list">
            <dl className="dl-style">
                {this.props.subtitles.map(
                    item => <dt className="dt-style" key={item.item} onClick={this.clickSubtitle}>{item.item}</dt>
                )}
            </dl>
        </div> : <button className="button" onClick={this.clickBtn}>Go back</button>;

        return <div>
            {list}
            {this.state.subtitleText ? <SubtitleText text={this.state.subtitleText}/> : null}
        </div>
    }
}
import React , { Component } from 'react';
import '../styles/General.css';
import '../styles/StudyList.css'
import {studyTopics} from '../constants/URLs';
import Subtitles from './SubtitlesList';
import SubtitleText from './SubtitleText';

export default class StudyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subtitlesListHidden: true, //should be a bool
            topicsJunior: null, //should be an array
            subtitleSelected: false, //should be a bool
            subtitles: null, //should be an array
            subtitleText: null //should be a string
        };
        this.clickHeader = this.clickHeader.bind(this);
        this.clickTitle = this.clickTitle.bind(this);
        this.clickSubtitle = this.clickSubtitle.bind(this);
    }

    componentWillMount() {
        fetch(studyTopics)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    topicsJunior: data
                });
            });
    }

    clickHeader() {
        this.setState({
            subtitles: null,
            subtitleText: null
        });
    }

    clickTitle(e) {
        let index = this.state.topicsJunior.category.map(el => {return el.title}).indexOf(e.target.innerHTML);
        let subtitles = this.state.topicsJunior.category[index].subtitles;
        this.setState({
            subtitlesListHidden: false,
            subtitles: subtitles,
            subtitleText: null
        });
    }

    clickSubtitle(e) {
        let index = this.state.subtitles.map(el => {return el.item}).indexOf(e.target.innerHTML);
        let url = this.state.subtitles[index].url;
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    subtitleText: data.text
                });
            });
    }

    render() {
        const titles = this.state.topicsJunior ?
            this.state.topicsJunior.category.map(
                item => <span className="item" key={item.id} onClick={this.clickTitle}>{item.title}</span>
            ) : null;

        return <div className="container">
            <h1 className="header" onClick={this.clickHeader}>Welcome back, Junior!</h1>
                <div className="table">
                    {titles}
                    {this.state.subtitles ? <Subtitles subtitles={this.state.subtitles} clickSubtitle={this.clickSubtitle}/> : null}
                    {this.state.subtitleText ? <SubtitleText text={this.state.subtitleText}/> : null}
                </div>
        </div>;
    }
}



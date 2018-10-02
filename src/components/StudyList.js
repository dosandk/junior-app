import React , { Component } from 'react';
import '../styles/General.css';
import '../styles/StudyList.css';
import {studyTopics} from '../constants/URLs';
import Subtitles from './SubtitlesList';

export default class StudyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topicsJunior: null, //should be an array
            subtitles: null, //should be an array
            subtitlesShown: false
        };
        this.clickHeader = this.clickHeader.bind(this);
        this.clickTitle = this.clickTitle.bind(this);
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
        });
    }

    clickTitle(e) {
        let index = this.state.topicsJunior.category.map(el => {return el.title}).indexOf(e.target.innerHTML);
        let subtitles = this.state.topicsJunior.category[index].subtitles;
        this.setState({
            subtitles: subtitles,
            subtitlesShown: true
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
                    {this.state.subtitles ? <Subtitles subtitles={this.state.subtitles} subtitlesShown={this.state.subtitlesShown}/> : null}
                </div>
        </div>;
    }
}



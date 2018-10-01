import React , { Component } from 'react';
import '../styles/General.css';
import '../styles/StudyList.css'
import {studyTopics} from '../constants/URLs';

export default class StudyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listHidden: true,
            topicsJunior: null,
            topicSelected: null,
            titleSelected: null
        };
        this.clickItem = this.clickItem.bind(this);
        this.clickTitle = this.clickTitle.bind(this);
        this.clickHeader = this.clickHeader.bind(this);
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
            listHidden: true
        });
    }

    clickItem(e) {
        let index = this.state.topicsJunior.category.map(el => {return el.title}).indexOf(e.target.innerHTML);
        this.setState({
            listHidden: false,
            titleSelected: null,
            topicSelected: index
        });
    }

    clickTitle(e) {
        let index = this.state.topicsJunior.category[this.state.topicSelected].subtitles.map(el => {return el.item}).indexOf(e.target.innerHTML);
        let url = this.state.topicsJunior.category[this.state.topicSelected].subtitles[index].url;
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    titleSelected: data.text
                });
            });
    }

    render() {
        const topics = this.state.topicsJunior ?
            this.state.topicsJunior.category.map(
                item => <span className="item" key={item.id} onClick={this.clickItem}>{item.title}</span>
            ) : null;

        const list = this.state.listHidden === false && this.state.titleSelected === null ?
            <div className="list">
                <dl className="dl-style">
                    {this.state.topicsJunior.category[this.state.topicSelected].subtitles.map(
                        item => <dt className="dt-style" key={item.item} onClick={this.clickTitle}>{item.item}</dt>
                    )}
                </dl>
            </div> : null;

        const text = this.state.titleSelected !== null ? <div className="dl-style">
            {this.state.titleSelected}
        </div> :null;

        return <div className="container">
            <h1 className="header" onClick={this.clickHeader}>Welcome back, Junior!</h1>
                <div className="table">
                    {topics}
                    {list}
                    {text}
                </div>

        </div>;
    }
}

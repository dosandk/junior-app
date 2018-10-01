import React, { Component } from "react";
import '../styles/ContactUs.css';
import {
    avatar,
    facebookAcc,
    linkedinAcc,
    githubAcc
} from '../constants/URLs'

export default class ContactUs extends Component {
    render() {
        return <div>
            <h1 className="heading">Hello!</h1>
            <div className="text">
                <img className="avatar" alt="av" src={avatar}/>
                <p>My name is Yuliana and I'm super excited about Front-end development :)</p>
                <p>I came here as a Japanese language teacher, but ended up being involved in a project with Japanese customer.
                    When my future PM asked me about what I wanted to do, I finally grabbed all my courage and told her what I've been
                    wanting to do since like 15 y.o. "I wanna be a web developer". This is my dream.</p>
                <p>I'm still new to this, but thought it would be nice to create something useful not only for myself,
                    but for you guys, who aim on passing Junior level like me. Hope you'll enjoy this very basic app!</p>
            </div>
            <h2 className="contact-info">Feel free to contact me at:</h2>
            <div id="social-platforms">
                <a className="btn btn-icon btn-facebook" href={facebookAcc}><i className="fa fa-facebook"/><span>Facebook</span></a>
                <a className="btn btn-icon btn-linkedin" href={linkedinAcc}><i className="fa fa-linkedin"/><span>LinkedIn</span></a>
                <a className="btn btn-icon btn-github" href={githubAcc}><i className="fa fa-github"/><span>GitHub</span></a>
            </div>
        </div>
    }
}
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StudyList from "./StudyList";
import Playlist from "./Playlist";
import ContactUs from "./ContactUs";
import '../styles/General.css';

const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontSize: "22px",
    fontWeight: "bold"
};

const Menu = () => (
    <Router>
        <div>
            <dl className="menu">
                <dt className="li-style">
                    <Link to="/" style={linkStyle}>Home</Link>
                </dt>
                <dt className="li-style">
                    <Link to="/playlist"  style={linkStyle}>Music</Link>
                </dt>
                <dt className="li-style">
                    <Link to="/contact"  style={linkStyle}>Contact Us</Link>
                </dt>
            </dl>
            <Route exact path="/" component={StudyList} />
            <Route path="/playlist" component={Playlist} />
            <Route path="/contact" component={ContactUs} />
        </div>
    </Router>
);

export default Menu;

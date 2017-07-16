import React from 'react';
import {Link} from 'react-router-dom';
export default class About extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="Home">Home</Link></li>
                            <li><Link to="about">About</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
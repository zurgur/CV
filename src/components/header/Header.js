import React, { Component } from 'react';
import Helmet from 'react-helmet';

import './Header.css';


export default class Header extends Component {

    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Alexander Freyr Sveinsson</h1>
                <img className='meImg' src='me.jpg'/>
            </header>
        );
    }
}
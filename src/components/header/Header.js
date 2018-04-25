import React, { Component } from 'react';
import Helmet from 'react-helmet';

import './Header.css';


export default class Header extends Component {

    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Alexander Freyr Sveinsson</h1>
                <img className='meImg' src='me.jpg'/>
                <div className='profileLinks'>
                    <a href='https://github.com/zurgur' className='git' ><img src='GitHub-Mark-120px-plus.png' className='headImg' /></a>
                    <a href='https://www.linkedin.com/in/alexander-sveinsson-a36715139/' className='ln' ><img src='In-2C-128px-TM.png' className='headImg' /></a>
                </div>
            </header>
        );
    }
}
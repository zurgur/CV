import React, { Component } from 'react';

import './Header.css';


export default class Header extends Component {

    render() {
        return (
            <header className="App-header" >
                <h1 className="App-title">Alexander Freyr Sveinsson</h1>
                <div className='infoAndLinks'>
                <div className='infoTex'>
                    <p className='infoP'>Stakhamrar 19</p>
                    <p className='infoP'>Reykjavík, 112 Rvk</p>
                    <p className='infoP'>(234) 869-2855</p>
                    <p className='infoP'>alexfreyrs@gmail.com</p>
                </div>
                <div className='profileLinks'>
                    <a href='https://github.com/zurgur' className='git' ><img src='GitHub-Mark-120px-plus.png' className='headImg' alt='github'/></a>
                    <a href='https://www.linkedin.com/in/alexander-sveinsson-a36715139/' className='ln' ><img src='In-2C-128px-TM.png' className='headImg' alt='linkedinn' /></a>
                </div>
                </div>
            </header>
        );
    }
}
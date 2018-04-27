import React, { Component } from 'react';


import './Footer.css';


export default class Footer extends Component{

    render(){
        return(
            <div className='Footer'>
                <h1 className='footer'>Hafðu samband</h1>
                <a href='mailto:alexfreyrs@gmail.com?Subject=Hello%20again'><img src='email.png' alt='email' className='headImg' /></a>
                <a href='https://github.com/zurgur' className='git' ><img src='GitHub-Mark-120px-plus.png' className='headImg' alt='github'/></a>
                <a href='https://www.linkedin.com/in/alexander-sveinsson-a36715139/' className='ln' ><img src='In-2C-128px-TM.png' className='headImg' alt='linkedinn' /></a>
            </div>
        );

    }
}
import React, { Component } from 'react';

import './Box.css'

export default class Skills extends Component{

    render(){
        
        return(
            <div className='Box'>
                <div className='BoxHeaderArea'>
                    <h3 className='BoxHeader'>{this.props.head}</h3>
                </div>
                <p className='BoxText'>{this.props.body}</p>
            </div>
        );

    }
}
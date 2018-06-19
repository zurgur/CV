import React, { Component } from 'react';

import Activity from '../activity';

import './Jobs.css';


export default class Jobs extends Component{

    render(){
        
        return(
            <div className='jobs'>
                <h1 className='department'>{this.props.name}</h1>
                <Activity info={this.props.info} />
            </div>
        );

    }
}
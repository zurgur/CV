import React, { Component } from 'react';

import Activity from '../activity';
import './Schools.css';


export default class Schools extends Component{

    render(){
        
        return(
            <div className='skolar'>
                <h1 className='department'>{this.props.name}</h1>
                <Activity info={this.props.info} />
            </div>
        );

    }
}
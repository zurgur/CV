import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './Cards.css';


export default class Projects extends Component{
    static propTypes = {
        info: PropTypes.array,
    }

    render(){
        return(
            <div className='Cards'>
                <p>utfaera</p>
            </div>
        );

    }
}
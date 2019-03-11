import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './Cards.css';


export default class Projects extends Component{
    static propTypes = {
        info: PropTypes.array,
    }

    render(){
        const info = this.props.info;
        return(
            <div className='Cards'>
            {info.map((i) => (
                <div key={i.name} className='card-container'>
                    <a href={i.page} className='box'>
                        <p className='cardName'>{i.name}</p>
                        <p className='cardTittle'>{i.tittle}</p>
                    </a>
                </div>
            ))}
            </div>
        );

    }
}
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
                <a key={i.name} className='box' href={i.page}>
                    {i.image ? <img className='cardImg' src={i.image} alt='card'/> : <img alt='card' className='cardImg--empty' src=''/>}
                    <p className='cardName'>{i.name}</p>
                    <p className='cardTittle'>{i.tittle}</p>
                </a>
            ))}
            </div>
        );

    }
}
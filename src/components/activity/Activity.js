import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Activity.css';

export default class Activity extends Component{

    static propTypes = {
        info: PropTypes.array,
    }
    render() {
        const about = this.props.info;
        console.info(about);
        return (
            <div className='about'>
                {about.map((thing) => (
                    <div className='currentAct' key={thing.tittle}>
                        <div className='Actnames'>
                            <h2 className='title'>{thing.tittle}</h2>
                            <p className='info'>{thing.info}</p>
                        </div>
                        <div className='date'>
                            <p>{thing.date}</p>
                        </div>
                    </div>
                ))}
                <hr className="style3"/>
            </div>
        )
    }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Activity.css';

export default class Activity extends Component{

    static propTypes = {
        info: PropTypes.array,
    }
    render() {
        const about = this.props.info;
        return (
            <div className='about'>
                {about.map((thing) => (
                    <div className='currentAct' key={thing.tittle}>
                        <div className='Actnames'>
                        <div className='titleAndInf'>
                            <h2 className='title'>{thing.tittle}</h2>
                            <p className='info'>{thing.info}</p>
                            </div>
                                <p>{thing.date}</p>
                        </div>
                    </div>
                ))}
                <hr className="style3"/>
            </div>
        )
    }
}
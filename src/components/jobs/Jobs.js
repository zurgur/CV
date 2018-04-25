import React, { Component } from 'react';

import Activity from '../activity';

import './Jobs.css';


export default class Jobs extends Component{

    render(){
        const a = [
            {tittle: "Dæmatíma kennari",
            date: '2018',
            info: 'kenndi stærðfræði og reiknifræði'},
            {tittle: "Vélarmaður / Sumarstarfstaður",
            date: '2011 - 2017',
            info: 'vann sem vélar maður'}
        ];
        return(
            <div className='jobs'>
                <h1 className='department' >Vinna</h1>
                <Activity info={a} />
            </div>
        );

    }
}
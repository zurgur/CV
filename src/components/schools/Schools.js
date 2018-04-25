import React, { Component } from 'react';

import Activity from '../activity';
import './Schools.css';


export default class Schools extends Component{

    render(){
        const a = [
            {tittle: "Háskóli Íslands",
            date: '2016 - 2018',
            info: 'Tölvunar fræði'},
        ];
        return(
            <div className='skolar'>
                <h1 className='department'>Menntun</h1>
                <Activity info={a} />
            </div>
        );

    }
}
import React, { Component } from 'react';

import Cards from '../cards';


export default class Endorsment extends Component{

    render(){
        const a = [
            {name: "Steinn Guðmundsson",
            tittle: 'Prófesor í tölvunarfræði',
            email: '',
            page: 'https://www.hi.is/staff/steinng'},
            {name: "Ebba Þóra Hvannberg, Ph.D.",
            tittle: 'Prófesor í tölvunarfræði',
            email: '',
            page: 'https://www.hi.is/staff/ebba'},
            {name: "Kári Aðalsteinsson",
            tittle: 'Garðyrkjustjóri KGRP,',
            email: 'Tölvunar fræði',
            page: 'http://www.kirkjugardar.is/sida.php?id=165&width=1920&height=1080'},
        ];
        return(
            <div className='endorsment'>
                <h1 className='department'>Meðmælendur</h1>
                <Cards info={a} />
            </div>
        );

    }
}
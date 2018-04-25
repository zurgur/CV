import React, { Component } from 'react';

import Cards from '../cards';


export default class Endorsment extends Component{

    render(){
        const a = [
            {name: "Ebba Þóra Hvannberg, Ph.D.",
            tittle: 'Prófesor í tölvunarfræði',
            image: 'ebba.jpg',
            email: '',
            page: 'https://www.hi.is/staff/ebba'},
            {name: "Steinn Guðmundsson",
            tittle: 'Prófesor í tölvunarfræði',
            image: 'steinn.jpg',
            email: '',
            page: 'https://www.hi.is/staff/steinng'},
            {name: "Kári Aðalsteinsson",
            tittle: 'Garðyrkjustjóri KGRP,',
            image: 'kari.jpg',
            email: 'Tölvunar fræði',
            page: ''},
        ];
        return(
            <div className='endorsment'>
                <h1 className='department'>Meðmælendur</h1>
                <Cards info={a} />
            </div>
        );

    }
}
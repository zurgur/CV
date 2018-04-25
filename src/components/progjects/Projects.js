import React, { Component } from 'react';

import './Projects.css';


export default class Projects extends Component{

    render(){
        const pros = [
            {tittle: 'k-assistant',
            git:'https://github.com/mimiqkz/kassistant',
            text: 'verkefni fyrir hugbúnaðarðarverkefni 1 var gert með Spring boot og með Postgress gagnagrunni. Hlutverk mitt var aðallega í bakendanum, gera gagnagrunn með AWS og tengja framenda við bakenda.'},
            {tittle: 'ArenaFighter',
            git:'https://github.com/zurgur/ArenaFighter',
            text: 'lokaverkefni í tölvuleikjaforritun þar sem við fengum að leika lausum hala og gera það sem okkur datt í hug. Leikurinn er 2D bardagaleikur gerður með Javasqript og html og grafíkin er okkar eigin en hægt er að spila hann hér'},
            {tittle:'7Frapp',
            git:'https://github.com/zurgur/7Frapp',
            text: 'verkefni í þróun hugbúnaðar. Forritið er gert með það í huga að geta pantað flug og séð upplýsingar um þau flug sem notandi hefur keypt sér. Gert í JavaFX með SQLite gagnagrunni. Ég vann í að leita að og panta flug.'},
            {tittle:'Paint-netbeans',
            git:'https://github.com/zurgur/Paint-netbeans',
            text: 'verkefni í viðmótsforritun gert í Java swing. Forritið var einstaklingsverkefni á fyrsta ári tölvunarfræðinnar en það fékk góðar viðtökur og ég lærði mikið af því. Þetta er einfalt forrit til þess að teikna myndir og vista þær á harðadisk tölvunnar'},
            {tittle:'Laxness',
            git:'https://github.com/mimiqkz/Laxness',
            text: 'nú er ég að vinna að þessu verkefni í samtarfi við safnið Gljúfrastein en það er mjög góð reynsla að vinna með kúnna og reyna að koma hugmyndum okkar saman. Forritið verður app sem er gert með Android studio.'}
        ]

        return(
            <div className='progects'>
            <h1>Projects</h1>
                {pros.map((pro) =>(
                    <div key={pro.tittle}>
                    <a href={pro.git} className='git' ><img src='GitHub-Mark-120px-plus.png' className='headImg' alt='github'/></a>
                    <h3>{pro.tittle}</h3>
                    <p>{pro.text}</p>
                    </div>
                ))}
            </div>
        );

    }
}
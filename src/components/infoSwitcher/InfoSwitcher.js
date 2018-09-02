import React, { Component } from 'react';

import './InfoSwitcher.css';


export default class InfoSwitcher extends Component {

   
   change = (butt) => {
       return (e) => {
           console.info(e);
       }
   }

    render() {
        return (
            <div className='switchButtons'>
                <button className='UnCheckButton' onClick={(this.change(true))}>CV</button>
                <button className='CheckButton'>Portfolio</button>
            </div>
        );
    }
}
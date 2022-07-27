import React from 'react';
import Navigation from '../Navigation';
// import '../App.css';

export default function Header({navState, handleNavState}){
    return (
        <header>
            <h1>Stephanie Ramos Rodriguez</h1>          
            <Navigation navState={navState} handleNavState={handleNavState}/>
        </header>
    );
}
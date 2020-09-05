import React from 'react';
import Aux from '../../hoc/Aux/Aux'
import HomePageImage from '../HomePageImage';
import classes from './Header.module.css'

function Header() {
    return (
        <Aux>
            <HomePageImage />
            <h1 className={classes.Content}>Vargyas Kamilla</h1>
            <h2>ARTIST</h2>
            <div><span className="App-link" >graphic</span> | <span className="App-link" >watercolour</span> | <span className="App-link" >acrylic</span></div>
        </Aux>
        
        )
    };


export default Header;
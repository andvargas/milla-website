import React from 'react';
import HomePageImage from '../HomePageImage';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header className={classes.Header}>
            <HomePageImage />
            <div>
                <NavLink 
                    to={{ pathname: '/graphite', state: { type: 'graphite' } }} 
                    className={classes.AppLink} 
                    activeStyle={{ color: "#b12382" }} >graphite</NavLink> | 
                <NavLink 
                    to={{ pathname: '/watercolour', state: { type: 'watercolour' } }} 
                    className={classes.AppLink} 
                    activeStyle={{ color: "#b12382" }} > watercolour</NavLink> | 
                <NavLink 
                    to={{ pathname: '/acrylic', state: { type: 'acrylic' } }} 
                    className={classes.AppLink} 
                    activeStyle={{ color: "#b12382" }} > acrylic</NavLink>
            </div>
        </header>
        
        )
    };


export default Header;
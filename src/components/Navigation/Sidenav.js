import React from 'react';
import HomePageImage from '../HomePageImage';
import classes from './Navigation.module.css'
import { NavLink } from 'react-router-dom';

function sidenav (props) {
    return (
        <nav className={classes.Sidenav}>
            <HomePageImage />
            <div className={classes.NavItems}>
                <NavLink
                    to={{ pathname: '/graphite', state: { type: 'graphite' } }}
                    className={classes.MenuItem}
                    activeStyle={{ color: "#b12382" }} >graphite</NavLink>
                <NavLink
                    to={{ pathname: '/watercolour', state: { type: 'watercolour' } }}
                    className={classes.MenuItem}
                    activeStyle={{ color: "#b12382" }} > watercolour</NavLink>
                <NavLink
                    to={{ pathname: '/acrylic', state: { type: 'acrylic' } }}
                    className={classes.MenuItem}
                    activeStyle={{ color: "#b12382" }} > acrylic</NavLink>
                <NavLink
                    to={{ pathname: '/originals'/* , state: { type: 'original' } */ }}
                    className={classes.MenuItem}
                    activeStyle={{ color: "#b12382" }} >originals</NavLink>
            </div>
        </nav>

    )
};


export default sidenav;
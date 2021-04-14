import React from 'react';
import { Link } from 'react-router-dom';

import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import classes from './Navigation.module.css';


const topnav = (props) => (
    <header className={classes.Topnav}>
        <Link to="/">
            <h1 className={classes.logo}>Kamilla Vargyas</h1>
        </Link>
        
        <nav>
            <a href="https://www.facebook.com/kamillavargyas">
                <IconButton
                    className={classes.Social}>
                        <FacebookIcon 
                    style={{ color: '#d29f9a' }}
                        fontSize="large"
                        /></IconButton>
            </a>
            <a href="https://www.instagram.com/vkami4/">
                <IconButton className={classes.Social}>
                        <InstagramIcon 
                            style={{ color: '#d29f9a' }}
                            fontSize="large" />
                </IconButton>
            </a>
            

        </nav>
    </header>
);

export default topnav;
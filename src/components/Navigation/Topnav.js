import React from 'react';
import { Link } from 'react-router-dom';

import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import classes from './Navigation.module.css';


const topnav = (props) => (
    <header className={classes.Topnav}>
        <Link to="/">
            <h1 className={classes.logo}>Kamilla Vargyas</h1>
        </Link>
        
        <nav>
            <IconButton 
                component={Link}
                className={classes.Social}
                to="/facebook">
                    <FacebookIcon 
                    style={{ color: '#d29f9a' }}
                        fontSize="large"
                        /></IconButton>
            <IconButton 
                component={Link}
                className={classes.Social}
                to="/twitter">
                    <TwitterIcon 
                        style={{ color: '#d29f9a'}}
                        fontSize="large" /></IconButton>
            <IconButton 
                component={Link}
                to="/instagram"
                className={classes.Social}>
                    <InstagramIcon 
                        style={{ color: '#d29f9a' }}
                        fontSize="large" /></IconButton>
            

        </nav>
    </header>
);

export default topnav;
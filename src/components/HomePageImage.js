import React from 'react';

import classes from './Header/Header.module.css'

function HomepageImage() {
    const url = 'https://kamilla.s3.eu-west-2.amazonaws.com/pinktree-whitebg.jpg';
    return (
        <a href='/'><img src={url} className={classes.Logo} style={{ height: 100 }} alt='Home' /></a>
    );
}

export default HomepageImage;
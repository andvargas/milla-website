import React from 'react';

import profilePic from '../../images/about-me.jpg';
import classes from './About.module.css'

const about = (props) => (
    <div className={classes.container}>
        <img id={classes.profile} src={profilePic} alt="Kamilla" />
        <div className={classes.text}>
            <h3>About Me</h3>
            <p>I’m a Hungarian-Transylvanian artist, I use a wide variety of mediums, subject matters, techniques and styles. I have been learning from artists who share their skills via youtube and other online platforms. I love experimenting, expressing my thoughts, feelings, ideas, dreams through painting and drawing. I like exploring philosophical topics, symbols, and I usually hide a message behind my compositions.</p>
        </div>
        
    </div>
)

export default about;
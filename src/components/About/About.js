import React from 'react';

import profilePic from '../../images/milla.jpg';
import classes from './About.module.css'

const about = (props) => (
    <div className={classes.container}>
        <img id={classes.profile} src={profilePic} alt="Kamilla" />
        <div className={classes.text}>
            <h3>About Me</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        
    </div>
)

export default about;
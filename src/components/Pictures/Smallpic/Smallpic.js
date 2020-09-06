import React from 'react';

import classes from './Smallpic.module.css'

const smallPic = (props) => (
    <div onClick={props.clicked}>
        <img className={classes.Smallimage} src={props.src} alt={props.title} />
        <p className={classes.Caption}>{props.title}</p>
    </div>
);
export default smallPic;
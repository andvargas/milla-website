import React from 'react';

import Pricelist from '../Pricelist/Pricelist'
import classes from './Content.module.css';
import Pictures from '../Pictures/Pictures';
import About from '../About/About';
import Admin from '../Admin/Admin'

function Content () {
    return (
        <div className={classes.body}>
            <h3>Original Compositions</h3>
            <h6>Prints Available | Worldwide Shipping</h6>
            <Pictures />
            <Pricelist />
            <About />
            {localStorage.getItem("user") ? <Admin /> : null}
        </div>
    )
}

export default Content;
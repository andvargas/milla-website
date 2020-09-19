import React from 'react';
import { Route } from "react-router-dom";

import Pricelist from '../Pricelist/Pricelist'
import classes from './Content.module.css';
import About from '../About/About';
import Admin from '../Admin/Admin';
import Smallpics from '../Pictures/Pictures';


function Content () {
    return (
        <div className={classes.body}>
            <h3>Original Compositions</h3>
            <h6>Prints Available | Worldwide Shipping</h6>
            <Smallpics />
            <Pricelist />
            <About />
            <Route path="/admin" component={Admin} />
        </div>
    )
}

export default Content;
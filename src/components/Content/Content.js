import React from 'react';
import { Route, Switch } from "react-router-dom";

import Pricelist from '../Pricelist/Pricelist'
import classes from './Content.module.css';
import About from '../About/About';
import Admin from '../Admin/Admin';
import Pictures from '../Pictures/Pictures';

function Content (props) {
    return (
        <div className={classes.body}>
            <Switch>
                <Route path="/admin" exact component={Admin} />

            </Switch>
            <Route path="/" exact component={Pictures} />
            <Route path="/originals" component={Pictures} />
            <Route path="/watercolour" component={Pictures} />
            <Route path="/graphite" component={Pictures} />
            <Route path="/acrylic" component={Pictures} />
                
            <Route path="/" exact component={Pricelist} />
            
            <Route path="/" component={About} />
        </div>
    )
}

export default Content;
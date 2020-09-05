import React, { Component } from 'react';

import classes from './Pictures.module.css'
import Smallpics from './Smallpics/Smallpics';


class Pictures extends Component {
    state = {
        thumbs: [],
        selectedThumbId: null
    }

    thumbSelectedHandler = (id) => {
        this.setState({selectedThumbId: id});
    }

    render () {
        return (
            <div className={classes.ImgContainer}>
                <Smallpics />
            </div>
        )
    }

}

export default Pictures;

//delete this file
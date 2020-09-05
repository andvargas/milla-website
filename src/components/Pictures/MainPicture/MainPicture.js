import React, { Component } from 'react';

import mainImg from '../../../images/tuzmadar.jpg';
import classes from './MainPicture.module.css';

class MainPicture extends Component {
    state = {
        loadedImg: null
    }
    render () {
        let mainImage = <img className={classes.main} src={mainImg} alt="main" />
        if (this.props.src) {
            mainImage = (
                <div>
                <img className={classes.main} src={this.props.src} alt="main" />
            </div>
            )
        }
        return mainImage;
    }
}


export default MainPicture;
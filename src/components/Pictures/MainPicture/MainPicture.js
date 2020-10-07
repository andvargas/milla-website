import React, { Component } from 'react';

// import mainImg from '../../../images/tuzmadar.jpg';
import classes from './MainPicture.module.css';

class MainPicture extends Component {
    state = {
        loadedImg: this.props.staticSrc
    }

    componentDidUpdate () {
        if (this.state.loadedImg !== this.props.src) {
            this.setState({ loadedImg: this.props.src })
        }
    }

    render () {
        let mainImage = (
            <div>
                    <img className={classes.main} src={this.state.loadedImg} alt="main" />
                </div>
        );
        return mainImage;
    }
}


export default MainPicture;
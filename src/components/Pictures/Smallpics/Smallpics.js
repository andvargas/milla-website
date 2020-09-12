import React, { Component } from 'react';

import axios from 'axios'

import Smallpic from '../Smallpic/Smallpic';
import classes from './Smallpics.module.css';
import MainPicture from '../MainPicture/MainPicture';

class Smallpics extends Component {
    state = {
        pictures: [],
        thumbs: [],
        selectedThumbSrc: null,
    }

    componentDidMount () {
        axios.get('https://milla-86381.firebaseio.com/artworks.json')
        .then(response => {
            const artworkArray = Object.values(response.data);
            console.log(artworkArray);
            this.setState({pictures: artworkArray})
        });
        

    }

    imgSelectedHandler = (id) => {
        this.setState({selectedThumbSrc: id});
    }

    render () {
        const thumbnails = this.state.pictures.map(thumb => {
            return <Smallpic
                key={thumb.id}
                title={thumb.title}
                src={thumb.src}
                clicked={() => this.imgSelectedHandler(thumb.src)} />
        });

        return (
            <div className={classes.container}>
                <MainPicture src={this.state.selectedThumbSrc} />
                <div className={classes.thumbcontainer}>
                {thumbnails}
                </div>
            </div>
            
            
        )
    }
}

export default Smallpics;
import React, { Component } from 'react';

import Smallpic from '../Smallpic/Smallpic';
import classes from './Smallpics.module.css';
import pic1 from '../../../images/tuzmadar.jpg';
import pic2 from '../../../images/pinktree.jpg';
import pic3 from '../../../images/w2.jpg';
import pic4 from '../../../images/w3.jpg';
import pic5 from '../../../images/w4.jpg';
import pic6 from '../../../images/w5.jpg';
import MainPicture from '../MainPicture/MainPicture';

class Smallpics extends Component {
    state = {
        pictures: [
            {
                id: 1,
                src: pic1,
                title: 'Phoenix of the Burning Forests'
            },
            {
                id: 2,
                src: pic2,
                title: 'Tree'
            },
            {
                id: 3,
                src: pic3,
                title: 'Floating Dreams'
            },
            {
                id: 4,
                src: pic4,
                title: 'Sunrise'
            },
            {
                id: 5,
                src: pic5,
                title: 'The Long Road'
            },
            {
                id: 6,
                src: pic6,
                title: 'Magic Deer'
            }
        ],
        thumbs: [],
        selectedThumbSrc: null,
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
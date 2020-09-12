import React, { Component } from 'react';

import Smallpic from '../Smallpic/Smallpic';
import classes from './Smallpics.module.css';
import pic1 from '../../../images/tuzmadar.jpg';
import pic2 from '../../../images/falcon.jpg';
import pic3 from '../../../images/w2.jpg';
import pic4 from '../../../images/w3.jpg';
import pic5 from '../../../images/w4.jpg';
import pic6 from '../../../images/w5.jpg';
import pic7 from '../../../images/desire.jpg';
import pic8 from '../../../images/grace.jpg';
import pic9 from '../../../images/volcano.jpg';
import pic10 from '../../../images/mask.jpg';
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
                title: 'The Way of the Falcon'
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
            },
            {
                id: 7,
                src: pic7,
                title: 'Desire'
            },
            {
                id: 8,
                src: pic8,
                title: 'Desire'
            },
            {
                id: 9,
                src: pic9,
                title: 'Land of the Blue Volcanoes'
            }, {
                id: 10,
                src: pic10,
                title: 'Take off the Mask'
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
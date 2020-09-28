import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux/Aux'

import Smallpic from './Smallpic/Smallpic';
import classes from './Pictures.module.css';
import MainPicture from './MainPicture/MainPicture';
import { Route } from 'react-router-dom';

class Pictures extends Component {
    state = {
        pictures: [],
        thumbs: [],
        selectedThumbSrc: null,
        typesToShow: 'original'
    }

    componentDidMount () {
        axios.get('https://milla-86381.firebaseio.com/artworks.json')
        .then(response => {
            const artworkArray = Object.values(response.data);
            this.setState({pictures: artworkArray})
        });
    }

    componentDidUpdate () {
        if (this.props.location.state) {
            if (this.props.location.state.type !== this.state.typesToShow) {
                const paintType = this.props.location.state.type
                this.setState({ typesToShow: paintType })
            }
        }
    }

    imgSelectedHandler = (id) => {
        this.setState({selectedThumbSrc: id});
    }

    typeSelectHandler = (type) => {
        console.log(type)
        this.setState({ typesToShow: type })
    }

    render () {
        const filtered = this.state.pictures.filter(originals => originals.type === this.state.typesToShow || originals.method === this.state.typesToShow);
        let thumbnails = filtered.map(thumb => {
            // const results = thumb.filter(thumb.type === 'original')
            return <Smallpic
                key={thumb.id}
                title={thumb.title}
                src={thumb.src}
                clicked={() => this.imgSelectedHandler(thumb.src)} />
        });

        return (
            <Aux>
                <Route path="/" exact render={() => <h3>Original Compositions</h3>} />
                <h6>Prints Available | Worldwide Shipping</h6>
                <div className={classes.container}>
                    <MainPicture src={this.state.selectedThumbSrc} />
                    <div className={classes.thumbcontainer}>
                    {thumbnails}
                    </div>
                </div>
            </Aux>
            
        )
    }
}

export default Pictures;
import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux/Aux'

import Smallpic from './Smallpic/Smallpic';
import Extrapics from './Extrapics/Extrapics'
import classes from './Pictures.module.css';
import MainPicture from './MainPicture/MainPicture';
import { Route } from 'react-router-dom';

class Pictures extends Component {
    state = {
        pictures: [],
        thumbs: [],
        selectedThumbSrc: '',
        staticSrc: '',
        typesToShow: 'original'
    }

    componentDidMount () {
        //this.props.location.state.type = 'originals'
        axios.get('https://milla-86381.firebaseio.com/artworks.json')
        .then(response => {
            const artworkArray = Object.values(response.data);
            this.setState({ pictures: artworkArray, selectedThumbSrc: response.data[Object.keys(response.data)[0]].src});  
        })
        
    }

    componentDidUpdate () {
        const filtered = this.state.pictures.filter(originals => originals.type === this.state.typesToShow || originals.method === this.state.typesToShow);
        const filteredSrc = filtered[Object.keys(filtered)[0]].src;
        if (this.state.staticSrc !== filteredSrc) {
            this.setState({ staticSrc: filteredSrc })
        }
        
        if (this.props.location.state) {
            if (this.props.location.state.type !== this.state.typesToShow) {
                const paintType = this.props.location.state.type
                this.setState({ typesToShow: paintType })
                this.setState({ selectedThumbSrc: filteredSrc }) // for some reason this doesn't get rendered, although the variable is correct, it might need to rerender after the promise has been executed.
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
        filtered.splice(9)
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
                    <MainPicture src={this.state.selectedThumbSrc} staticSrc={this.state.staticSrc} />
                    <div className={classes.thumbcontainer}>
                    {thumbnails}
                    </div>
                </div>
                <Route 
                    path="/watercolour" 
                    render={(props) => (
                        <Extrapics {...props} data={this.state.pictures} className={classes.thumbExtra} setMainImg={this.imgSelectedHandler} paintMethod={this.props.location.state.type} />
                    )} />
            </Aux>
            
        )
    }
}

export default Pictures;
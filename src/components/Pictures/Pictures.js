import React, { Component } from 'react';
import axios from '../../axios';
import Aux from '../../hoc/Aux/Aux'

import Smallpic from './Smallpic/Smallpic';
import classes from './Pictures.module.css';
import { Route } from 'react-router-dom';
import Backdrop from '../UI/Backdrop/Backdrop';
// import Modal from '../UI/Modal/Modal';
// import Transition from 'react-transition-group/Transition';
import PhotoCarousel from './PhotoCarousel';

class Pictures extends Component {
    state = {
        pictures: [],
        thumbs: [],
        clickedIndex: '1',
        typesToShow: 'original',
        modalIsOpen: false,
        showBlock: false,
        carouselIsOpen: false
    }

    closeCarousel = () => {
        this.setState({ carouselIsOpen: false })
    }

    showModal = () => {
        this.setState({ modalIsOpen: true })
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    componentDidMount () {
        this.loadData()
    }

    componentDidUpdate () {
        let filtered = this.state.pictures.filter(originals => originals.type === this.state.typesToShow || originals.method === this.state.typesToShow);
        let filteredSrc = filtered[Object.keys(filtered)[0]].src;
        
        if (this.props.location.state) {
            if (this.props.location.state.type !== this.state.typesToShow) {
                const paintType = this.props.location.state.type
                this.setState({ typesToShow: paintType })
                this.setState({ selectedThumbSrc: filteredSrc })

            }
        }
    }

    loadData () {
        axios.get('/artworks.json')
            .then(response => {
                const artworkArray = Object.values(response.data);
                this.setState({ pictures: artworkArray });
                const filtered = artworkArray.filter(originals => originals.type === this.state.typesToShow || originals.method === this.state.typesToShow);
                const filteredSrc = filtered[0].src
                this.setState({ selectedThumbSrc: filteredSrc, nextSrc: filtered[1].src })
            })
    }

    imgSelectedHandler = (thumb, index) => {
        this.setState({selectedThumbSrc: thumb.src, clickedIndex: index, carouselIsOpen: true});
    }

    typeSelectHandler = (type) => {
        console.log(type)
        this.setState({ typesToShow: type })
    }
    
    nextImgHandler = () => {
        console.log(this.state)
        this.setState({ prevSrc: this.state.selectedThumbSrc})
        this.setState({ selectedThumbSrc: this.state.nextSrc })
    }

    render () {
        const filtered = this.state.pictures.filter(originals => originals.type === this.state.typesToShow || originals.method === this.state.typesToShow);
        // filtered.splice(9)
        let thumbnails = filtered.map((thumb, index) => {
            // const results = thumb.filter(thumb.type === 'original')
            return <Smallpic
                index={index}
                key={thumb.id}
                title={thumb.title}
                src={thumb.src}
                clicked={() => this.imgSelectedHandler(thumb, index)}
                />
        });

        return (
            <Aux>
                <Route path="/" exact render={() => <h3>Original Compositions</h3>} />
                <h6>Prints Available | Worldwide Shipping</h6>

                {this.state.carouselIsOpen ? (
                    <PhotoCarousel close={this.closeCarousel} items={filtered} clicked={this.state.clickedIndex} />
                ) : null}
                {this.state.modalIsOpen ?  (
                    <Backdrop show />
                ) : null}
                
                
                <div className={classes.container}>
                    <div className={classes.thumbcontainer}>
                    {thumbnails}
                    </div>
                </div>

            </Aux>
            
        )
    }
}

export default Pictures;
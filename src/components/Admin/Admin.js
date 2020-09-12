import React, { Component } from 'react';
import axios from 'axios';

import './Admin.css'

class Admin extends Component {
    state = {
        title: '',
        size: '',
        price: ''
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            size: this.state.size,
            price: this.state.price
        }
        axios.post('https://milla-86381.firebaseio.com/artworks.json', data)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    render () {
        return (
            <div className="NewArtwork">
                <h4>Add Artwork </h4>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Size</label>
                <input type="text" value={this.state.size} onChange={(event) => this.setState({ size: event.target.value })} />
                <label>Price</label>
                <input type="text" value={this.state.price} onChange={(event) => this.setState({ price: event.target.value })} />
                <button onClick={this.postDataHandler}>Add Artwork</button>
            </div>
        )
    }
}

export default Admin;
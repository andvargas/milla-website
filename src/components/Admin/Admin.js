import React, { Component } from 'react';
import axios from 'axios';

import './Admin.css'

class Admin extends Component {
    state = {
        id: '',
        title: '',
        size: '',
        price: '',
        src: ''
    }
    // fetch last id to increment for the next post
    componentDidMount = () => {
        axios.get('https://milla-86381.firebaseio.com/artworks.json')
            .then(response => {
                var keys = Object.entries(response.data);
                var last = keys.slice(-1)[0];
                var lastId = last[1].id;
                this.setState({id: lastId});
        });
    }
        
    postDataHandler = () => {
        const data = {
            title: this.state.title,
            size: this.state.size,
            price: this.state.price,
            src: this.state.src,
            id: this.state.id + 1
        }

        axios.post('https://milla-86381.firebaseio.com/artworks.json', data)
            .then(response => console.log(response))
            .then(this.setState({ id: '', title: '', size: '', price: '', src: '' }))
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
                <label>Image link</label>
                <input type="text" value={this.state.src} onChange={(event) => this.setState({ src: event.target.value })} />
                <label>Price</label>
                <input type="text" value={this.state.price} onChange={(event) => this.setState({ price: event.target.value })} />
                <button onClick={this.postDataHandler}>Add Artwork</button>
            </div>
        )
    }
}

export default Admin;
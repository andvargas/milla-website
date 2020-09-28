import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";

import './Admin.css'

class Admin extends Component {
    state = {
        id: '',
        title: '',
        size: '',
        price: '',
        src: '',
        type: '',
        method: '',
        submitted: false
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
            id: this.state.id + 1,
            method: this.state.method,
            type: this.state.type
        }

        axios.post('https://milla-86381.firebaseio.com/artworks.json', data)
            .then(response => console.log(response))
            .then(this.setState({ id: '', title: '', size: '', price: '', src: '', type: '', submitted: true }))
            .catch(error => console.log(error))
    }

    render () {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/" />;
        }
        return (
            <div className="NewArtwork">
                {redirect}
                <h4>Add Artwork </h4>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Size</label>
                <input type="text" value={this.state.size} onChange={(event) => this.setState({ size: event.target.value })} />
                <label>Image link</label>
                <input type="text" value={this.state.src} onChange={(event) => this.setState({ src: event.target.value })} />
                <label>Price</label>
                <input type="text" value={this.state.price} onChange={(event) => this.setState({ price: event.target.value })} />
                <label>Method</label>
                <input type="text" value={this.state.method} onChange={(event) => this.setState({ method: event.target.value })} />
                <label>Original?</label>
                <input type="checkbox" value="original" onChange={(event) => this.setState({ type: event.target.value })} />
                <button onClick={this.postDataHandler}>Add Artwork</button>
            </div>
        )
    }
}

export default Admin;
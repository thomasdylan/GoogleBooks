import React, { Component } from 'react';
import API from '../utils/API';
import '../App.css';

class Saved extends Component {
    state = {
        dbBooks = {}
    }

    savedBooks = () => {
        API.showBooks()
            .then(res => this.setState({ dbBooks: res }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>Saved</h1>
            </div>
        )
    }
}

export default Saved;

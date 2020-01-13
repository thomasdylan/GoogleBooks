import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import API from "../utils/API";
import '../App.css';

class Search extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data }),
                console.log(this.state.books)
            )
            .catch(err => console.log(err));
        
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSearch = e => {
        e.preventDefault();
        if (this.state.title) {
            this.loadBooks();
        }
    }
    

    render() {
        return (
            <div className="container">
                <SearchForm />
            </div>
        )
    }
}

export default Search;

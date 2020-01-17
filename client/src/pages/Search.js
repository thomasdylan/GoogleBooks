import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import BookItems from '../components/BookItems';
import API from "../utils/API";
import '../App.css';

class Search extends Component {
    state = {
        books: [],
        bookSearch: "",
        saved: {}
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        API.getBooks(this.state.bookSearch)
            .then(res => this.setState({ books: res.data.items }))
            .catch(err => console.log(err));
    };

    saveBook = obj => {
        this.setState({ saved: obj });
        API.saveBook(obj)
           .then(console.log("Save successful"))
           .catch(err => console.log(err));
        alert("Book has been saved");
    }

    render() {
        return (
            <div className="container">
                <SearchForm
                    search={this.state.bookSearch}
                    change={this.handleInputChange}
                    submit={this.handleFormSubmit}
                />
                <div>
                    {this.state.books.map(book => {
                        return (
                            <BookItems
                                key={book.id}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors[0]}
                                description={book.volumeInfo.description}
                                image={book.volumeInfo.imageLinks.smallThumbnail}
                                link={book.volumeInfo.infoLink}
                                save={this.saveBook}
                            />
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default Search;

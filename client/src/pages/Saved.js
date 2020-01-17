import React, { Component } from 'react';
import API from '../utils/API';
import SavedItems from '../components/SavedItems';
import '../App.css';

class Saved extends Component {
    state = {
        dbBooks: []
    }

    savedBooks = () => {
        API.showBooks()
            .then(res => this.setState({ dbBooks: res.data }))
            .catch(err => console.log(err));
        console.log("Ran savedBooks")
    }

    deleteBook = (id) => {
        API.deleteBook(id)
            .then(() => console.log("Deleted book"))
            .catch(err => console.log(err));
        alert("Book has been deleted");
        this.refreshPage();
    }

    componentDidMount() {
        this.savedBooks();
        console.log(this.state.dbBooks);
    }

    refreshPage = () => window.location.reload(false);
    

    render() {

        return (
            <div className="container">
                <div className="saved-books">
                    {this.state.dbBooks.map(book => {
                        return (
                            <SavedItems
                                key={book._id}
                                id={book._id}
                                title={book.title}
                                author={book.author}
                                description={book.description}
                                image={book.image}
                                link={book.link}
                                deleter={this.deleteBook}
                            />
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default Saved;

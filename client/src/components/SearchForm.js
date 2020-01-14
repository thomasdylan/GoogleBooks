import React from 'react';
import "../App.css";

function SearchForm(props) {
    return (
        <div className="search-form">
        <h3>Book Search</h3>
            <form>
                <div className="form-group row search-title">
                    <label for="inputBook" className="col-sm-2 col-form-label">Search For Book</label>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            id="inputBook"
                            placeholder="Book Title"/>
                    </div>
                </div>
                <button className="btn btn-primary mb-2">Search</button>
            </form>
        </div>
    )
}

export default SearchForm;

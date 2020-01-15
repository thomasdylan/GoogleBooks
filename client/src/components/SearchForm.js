import React from 'react'

export default function SearchForm({search, change, submit}) {
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
                            name="bookSearch"
                            value={search}
                            onChange={change}
                            className="form-control"
                            placeholder="Book Title"/>
                    </div>
                </div>
                <button className="btn btn-primary mb-2" onClick={submit}>
                    Search
                </button>
            </form>
        </div>
    )
}
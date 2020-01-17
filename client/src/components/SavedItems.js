import React from 'react';
import "../App.css";

export default function BookItems({ id, title, author, description, image, link, deleter }) {
    const deleted = id ;
    return (
        <div>
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={image} class="card-img" alt={title} />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{description}</p>
                            <p class="card-text">
                                <small class="text-muted">By: {author}</small>
                            </p>
                            <p class="card-text">
                                <a href={link} target="_blank" rel="noopener noreferrer"><small class="text-muted">{link}</small></a>
                            </p>
                            <button onClick={() => deleter(deleted)} type="button" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
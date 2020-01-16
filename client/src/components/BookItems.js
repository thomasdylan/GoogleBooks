import React from 'react';
import "../App.css";

export default function BookItems({title, author, description, image, link, save}) {
    const saved = {title: title, author: author, description: description, image: image, link: link}
    return (
        <div>
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={image} class="card-img" alt={title}/>
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
                            <button onClick={() => save(saved)} type="button" class="btn btn-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
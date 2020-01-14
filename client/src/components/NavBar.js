import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src="https://upload.wikimedia.org/wikipedia/en/b/ba/Google_Books_logo_2015.svg" width="200" height="40" alt="google books"/>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to ="/">Search</Link>
                        <Link className="nav-item nav-link" to ="/saved">Saved</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

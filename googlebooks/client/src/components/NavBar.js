import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                <img src="https://upload.wikimedia.org/wikipedia/en/b/ba/Google_Books_logo_2015.svg" width="200" height="40" alt="google books"/>
                </a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/">Search</a>
                        <a className="nav-item nav-link" href="/saved">Saved</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">Fremja</Link>
        <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="heima">Heima</Link>
                </li>
            </ul>
        </div>
    </nav>
)
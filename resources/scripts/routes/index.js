/**
 * @module routes
 *
 * This module exports the routes for the application Fremja. 
 *
 */
import React from 'react'
import { Route, Link } from 'react-router-dom';

export function IndexRoute() {
  return (
    <Route></Route>
  )
}

export class Nav extends React.Component {
  render () {
    return (
      <nav 
        className="navbar fixed-top navbar-expand-lg navbar-light navbar-app"
        >
        <Link className="navbar-brand" to="/">Fremja</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="breadcrumb-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </nav>
    )
  }
}
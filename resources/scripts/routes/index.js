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
    <Route>
      <div className="container route ">
        <div className="card-columns">
          <div className="card">
            <img className="card-img-top" src=".../100px160/" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title that wraps to a new line</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
          <div className="card p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
         {/* <div class="card">
            <img class="card-img-top" src=".../100px160/" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card bg-primary text-white text-center p-3">
            <blockquote class="blockquote mb-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
              <footer class="blockquote-footer">
                <small>
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This card has a regular title and short paragraphy of text below it.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card">
            <img class="card-img" src=".../100px260/" alt="Card image">
          </div>
          <div class="card p-3 text-right">
            <blockquote class="blockquote mb-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer class="blockquote-footer">
                <small class="text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>*/}
        </div>
      </div>
    </Route>
  )
}

export class Nav extends React.Component {
  render () {
    return (
      <nav 
        className="navbar fixed-top navbar-expand-lg navbar-light navbar-app"
        >
        <Link className="navbar-brand" to="/">Fremja</Link>
        <ul className="navbar-nav mr-auto">
        </ul>
        <div className="navbar-nav">
          <Clock></Clock>
        </div>
      </nav>
    )
  }
}

/**
 * 
 */
export class Clock extends React.Component {
  
  /**
   * 
   * @param {*} props 
   */
  constructor (props) {
    super(props)
    this.state = {
      time: ''
    }
    this._tick = this._tick.bind(this)
  }

  /**
   * 
   */
  componentDidMount () {
    setInterval(this._tick, 1000)
    this._tick()
  }

  /**
   * 
   */
  _tick () {
      let currentTime = new Date()
      let currentHours = currentTime.getHours ( )
      let currentMinutes = currentTime.getMinutes ( )
      let currentSeconds = currentTime.getSeconds ( )
      // Pad the minutes and seconds with leading zeros, if required
      currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
      currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
      this.setState({ time: currentHours + ":" + currentMinutes + ":" + currentSeconds })
  }

  /**
   * 
   */
  render () {
    return (
      <div className="nav-item">
        <a className="nav-link">{ this.state.time }</a>
      </div>
    )
  }
}
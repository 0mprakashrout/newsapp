import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class NavBar extends Component {


  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand" to="/">NewsToday</Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link> </li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/general">General</Link> </li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/business">Business</Link> </li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link> </li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health">Health</Link> </li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science">Science</Link> </li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports">Sports</Link> </li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/technology">Technology</Link> </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar

import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.title1}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" >About</Link>
        </li>
      </ul>
      <form className="d-flex">
      <div class="form-check form-switch">
      <div className="container my-3 mx-1"> 
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.btn2}  />
      <label className={`"form-check-label text-${props.theme=='light'?'dark':'light'}`} for="flexSwitchCheckDefault">Red Theme</label></div></div>
      </form>
      <form className="d-flex">
      <div class="form-check form-switch">
      <div className="container my-3 mx-1"> 
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.btn}  />
      <label className={`"form-check-label text-${props.theme=='light'?'dark':'light'}`} for="flexSwitchCheckDefault">Dark Theme</label></div></div>
      </form>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
title: PropTypes.string.isRequired,   //compulsory isrequired
title1: PropTypes.number   //error in console if prop passed as a string
}

Navbar.defaultProps = {
  title: 'aasdf',
  title1: 122
}
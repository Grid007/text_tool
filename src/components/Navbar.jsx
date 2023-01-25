import React,{useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
export default function Navbar(props) {
  
  return (
    <>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/Blogs">Blogs</Link>
        <Link className="nav-link" to="/Contact">Contact Us</Link>
        <div className="form-check form-switch">
  <span className={`position-absolute top-50 end-0 text-${props.mode=='light'?'dark':'light'}`}><input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}></input>
  <label className='form-check-label' htmlFor="flexSwitchCheckDefault">Dark Mode</label></span>
</div>
      </div>
    </div>
  </div>
</nav>
    </>

  )
}

import React from 'react'
import { Link } from "react-router-dom";
import reactLogo from '../react-logo.png';

const Navbar = () => {
  const [isActive, setisActive] = React.useState(false);
  
  return (
    <div>
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className='navbar-item' to="/">
                <img src={ reactLogo } />
                </Link>

                <a  onClick={() => {setisActive(!isActive);}} role="button" className={`navbar-burger burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className="navbar-start">
                    <Link className='navbar-item' to="/">Home</Link>
                    <Link className='navbar-item' to="/category">Category</Link>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
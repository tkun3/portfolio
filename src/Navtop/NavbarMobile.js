import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'react-materialize';


class Navbar extends Component{
	render(){
		return(
		  <nav className="navbarBottomContainer">
		    <div className="container nav-wrapper">
		      <a className="brand-logo title">TAKUMA PIMLOTT</a>
		      <ul id="nav-mobile" className="right hide-on-med-and-down">
		        <Link to='/'><li className="page">ABOUT</li></Link>
		        <Link to='/projects'><li className="page">PROJECTS</li></Link>
		        <Link to='/gallery'><li className="page">GALLERY</li></Link>
		        <Link to='/contact'><li className="page">CONTACT</li></Link>
		      </ul>
		    </div>
		  </nav>
		);
	}
}


export default NavbarMobile;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Import Bootstrap Navbar
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

/*
        <NavItem>
          <Link to="/Gallery"><NavLink className="navLinks">GALLERY</NavLink></Link>
        </NavItem>

        <NavItem> 
          <Link to="/Contact"><NavLink className="navLinks">CONTACT</NavLink></Link>
        </NavItem>
*/


class Navtop extends Component{
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  	toggle() {
   	 this.setState({
      isOpen: !this.state.isOpen
    });
  }
	render(){
		return(
	<div>
        <Navbar color="dark" dark expand="md" fixed="top">
        <div className="container">
          <NavbarBrand className="title">TAKUMA PIMLOTT</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            	<NavItem>
					<Link to="/about"><NavLink className="navLinks">ABOUT</NavLink></Link>
				</NavItem>
				<NavItem>
					<Link to="/portfolio"><NavLink className="navLinks">PORTFOLIO</NavLink></Link>
				</NavItem>

            </Nav>
          </Collapse>
        </div>
        </Navbar>
      </div>


		);
	}
}


export default Navtop;
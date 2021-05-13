import React, { PureComponent } from 'react'
import {Link, NavLink} from 'react-router-dom';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';

export default class Header extends PureComponent {
  render() {

    return (
      <div className="sidebar-container">
        <Navbar collapseOnSelect expand="md" fixed="top" className="sidebar" variant="dark">  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="sidebar-nav">
            <Nav className="sidebar-nav">
              <Nav.Link className="nav-link" href='/DRPG'>Home</Nav.Link>
              <Nav.Link className="nav-link" href='/DRPG/characters'>Characters</Nav.Link>
              <Nav.Link className="nav-link" href='/DRPG/evilities'>Evilities</Nav.Link>
              <Nav.Link className="nav-link" href='/DRPG/skills'>Skills</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

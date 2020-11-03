import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">
                    <NavLink className="NavBar-nav" to="/">iShop</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#cart">
                            <NavLink className="NavBar-nav" exact to="/cart">Cart</NavLink>
                        </Nav.Link>
                        <Nav.Link href="#Orders">
                            <NavLink className="NavBar-nav" exact to="/orders">Orders</NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
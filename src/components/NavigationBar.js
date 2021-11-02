import React, { Component } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';


export default class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" className="fixed-top">
                  <Container >
                      <Navbar.Brand  className="navbar-brand order-1 mr-0 " href="https://www.horizonsinternational.org/mec" target="_blank">Sponsored by MEC Horizons</Navbar.Brand>
                            <Nav className="me-auto">
                             <Nav.Link href="/">Home</Nav.Link>
                             <Nav.Link href="/about">About</Nav.Link>
                             <Nav.Link href="/projects">Projects</Nav.Link>
                            </Nav>
                   </Container>
                </Navbar>
            </div>
        )
    }
}

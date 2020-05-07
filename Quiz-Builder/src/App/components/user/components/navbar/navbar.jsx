import React, { Component } from 'react';
import { Form, Button, Navbar, Nav } from 'react-bootstrap';
import '../../../../assets/styles/navbar.css';

class navbar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Navbar.Brand className="nav-brand">{`Hi, ${sessionStorage.getItem("username")}`}</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/user">Available Tests</Nav.Link>
                    <Nav.Link href="/user/testAttempts">Test Attempts</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-light" href="/">Logout</Button>
                </Form>
            </Navbar>
        )
    }
}

export default navbar;
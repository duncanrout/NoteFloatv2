import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

export const NavigationBar = () => (
    <nav class="navbar navbar-dark bg-dark">
        <Navbar expand="lg">
            <Navbar.Brand href="/">NF</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
       
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/chat">Chat</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </nav>
)


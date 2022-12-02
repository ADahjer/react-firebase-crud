import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

const Navigation = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand>React Contacts</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Navigation;
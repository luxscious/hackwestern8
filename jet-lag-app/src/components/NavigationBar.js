import * as React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/jetlaglogo.png'
// import axios from 'axios';


const useStyles = makeStyles((theme) => ({

}));

function NavigationBar() {
    const classes = useStyles();

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="logo" /> </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>

    )
}

export default NavigationBar;
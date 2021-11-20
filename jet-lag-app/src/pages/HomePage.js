import * as React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/jetlaglogo.png'
import '../styles/HomePage.css'
import { createPortal } from 'react-dom';

const useStyles = makeStyles((theme) => ({
    homePage: {
        background: "#58607C",
    }
}));

function HomePage(){
const classes = useStyles();
    <div className={classes.homePage}>
        
    </div>
}

export default HomePage;
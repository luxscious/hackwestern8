import * as React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Container,
} from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/jetlaglogo.png";
// import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  navbar: {
    position: "fixed",
    width: "100%",
    zIndex: "4",
  },
  list_item: {
    font: "Open Sans",
    fontWeight: "bold",
    color: "white",
  },
}));

function NavigationBar() {
  const classes = useStyles();

  return (
    <Navbar bg="dark" variant="dark" className={classes.navbar}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />{" "}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" className={classes.list_item}>
            Home
          </Nav.Link>
          <Nav.Link href="#about" className={classes.list_item}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

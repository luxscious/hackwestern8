// import * as React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Container,
} from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/Logo.svg";
import earthImage from "../assets/Earth.svg";
// import '../styles/HomePage.css'
import { createPortal } from "react-dom";
import { createTheme } from "@mui/material/styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import signup_back from "../assets/signup-modal.png";

const useStyles = makeStyles((theme) => ({
  siteContainer: {
    backgroundColor: "#58607C",
    width: "100%",
    height: "1080px",
  },
  earthImage: {
    height: "498px",
    width: "996px",
    position: "fixed",
    left: "50%",
    bottom: "-300px",
    transform: "translate(-50%, -50%)",
    margin: "0 auto",
  },
  login: {
    backgroundImage: `url(${signup_back})`,
    width: "319px",
    height: "439px",
    zIndex: "3",
    position: "fixed",
    margin: "0",
    top: "50%",
    left: "50%",
    msTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
  },
}));

function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const classes = useStyles();

  return (
    <div className={classes.siteContainer}>
      {/* <p1>Hello</p1> */}
      <img className={classes.earthImage} src={earthImage} />

      <div className={classes.login}>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default HomePage;

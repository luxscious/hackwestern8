import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/Logo.svg";
import earthImage from "../assets/Earth.svg";
import logoText from "../assets/RiSyncText.svg";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import signup_back from "../assets/signup-modal.png";
import { useNavigation } from "@react-navigation/core";

const useStyles = makeStyles((theme) => ({
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
    display: "flex",
    flexDirection: "column",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 66,
    marginRight: 66,
    alignItems: "center",
  },
  Button1: {
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#2B2B40",
      borderColor: "white",
      color: "white",
      outline: 0,
    },
    "&:active": {
      backgroundColor: "#2B2B40",
      borderColor: "white",
      color: "white",
      outline: 0,
    },
    "&:focus": {
      backgroundColor: "#2B2B40",
      borderColor: "white",
      color: "white",
      outline: 0,
    },
    width: 238,
    height: 52,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    borderColor: "#2B2B40",
    marginBottom: 40,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Open Sans",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },
  Button2: {
    backgroundColor: "#2B2B40",
    borderRadius: 10,
    "&:hover": {
      backgroundColor: "white",
      borderColor: "white",
      color: "#2B2B40",
    },
    "&:active": {
      backgroundColor: "white",
      borderColor: "white",
      color: "#2B2B40",
    },
    "&:focus": {
      backgroundColor: "white",
      borderColor: "white",
      color: "#2B2B40",
      outline: 0,
    },
    width: 238,
    height: 52,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    borderColor: "white",
  },
  logo: {
    width: 86,
    height: 88,
  },
  textLogo: {
    marginTop: 9,
    width: 146,
    height: 46,
  },
  logoDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 33,
  },
}));

function HomePage() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  const navigation = useNavigation();
  function handleSubmit(event) {
    // event.preventDefault();
  }

  const classes = useStyles();

  return (
    <>
      {/* <p1>Hello</p1> */}
      <img className={classes.earthImage} src={earthImage} />
      <div className={classes.login}>
        <div className={classes.logoDiv}>
          <img src={logo} alt="logo" className={classes.logo} />{" "}
          <img src={logoText} alt="logo" className={classes.textLogo} />{" "}
        </div>
        <div className={classes.buttons}>
          <Button
            className={classes.Button1}
            onClick={() => {
              navigation.push("Info");
            }}
          >
            <p className={classes.buttonText}>Login</p>
          </Button>
          <Button
            className={classes.Button2}
            onClick={() => {
              navigation.push("Info");
            }}
          >
            <p className={classes.buttonText}>Sign Up</p>
          </Button>
        </div>
      </div>

      {/* 
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
      </div> */}
    </>
  );
}

export default HomePage;

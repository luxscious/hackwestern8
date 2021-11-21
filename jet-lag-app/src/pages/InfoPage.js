import React from "react";
import { makeStyles } from "@material-ui/core";
import GooglePlacesAutoComplete from "react-google-places-autocomplete";
import { useState } from "react";
import background from "../assets/Background_Bubbles.svg";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import DesktopTimePicker from "@mui/lab/DesktopTimePicker";
const useStyles = makeStyles((theme) => ({
  siteContainer: {
    backgroundColor: "#58607C",
    height: 1080,
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
  },
  formFont: {
    fontSize: 14,
    fontFamily: "Open Sans",
    fontWeight: "Bold",
    color: "#FFFFFF",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 21,
    paddingLeft: 21,
    textAlign: "center",
  },
  input: {
    width: 347,
    paddingLeft: 70,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  textContainer: {
    flex: "col",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#4D4C66",
    borderRadius: 10,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 69,
    backgroundColor: "#303046",
    marginTop: 140,
    marginLeft: 256,
    marginRight: 256,
    justifyContent: "center",
    borderRadius: 25,
  },
  timePicker: {
    backgroundColor: "white",
  },
  confirmButton: {
    backgroundColor: "#4D4C66",
  },
}));
function confirm() {}
function InfoPage() {
  let apiKey = "AIzaSyBSWPuO1QeCaZX9c7IgTQarIievmmk7q50";

  const classes = useStyles();
  const [firstLocation, setFirstLocation] = useState();
  const [endLocation, setEndLocation] = useState();
  const [daysPrior, setDaysPrior] = useState();
  const [sleepStartTime, setSleepStartTime] = useState("10:00");
  const [sleepEndTime, setSleepEndTime] = useState("10:00");

  if (firstLocation) {
    console.log(firstLocation);
    // console.log(geocodeByPlaceId(firstLocation.value.place_id));
  }

  return (
    <div className={classes.siteContainer}>
      <div className={classes.container}>
        <div className={classes.inputContainer}>
          <div className={classes.textContainer}>
            <h1 className={classes.formFont}>First Location</h1>
          </div>
          <div className={classes.input}>
            <GooglePlacesAutoComplete
              apiKey={apiKey}
              selectProps={{
                firstLocation,
                onChange: setFirstLocation,
              }}
            />
          </div>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.textContainer}>
            <h1 className={classes.formFont}>End Location</h1>
          </div>
          <div className={classes.input}>
            <GooglePlacesAutoComplete
              apiKey={apiKey}
              selectProps={{
                endLocation,
                onChange: setEndLocation,
              }}
            />
          </div>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.textContainer}>
            <h1 className={classes.formFont}>Days Prior</h1>
          </div>
          <div className={classes.input}>
            <input name="daysPrior" onChange={(input) => setDaysPrior(input)} />
          </div>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.textContainer}>
            <h1 className={classes.formFont}>Sleep Time</h1>
          </div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopTimePicker
              value={sleepStartTime}
              onChange={(newValue) => {
                setSleepStartTime(newValue);
              }}
              renderInput={(params) => (
                <TextField className={classes.timePicker} {...params} />
              )}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopTimePicker
              value={sleepEndTime}
              onChange={(newValue) => {
                setSleepEndTime(newValue);
              }}
              renderInput={(params) => (
                <TextField className={classes.timePicker} {...params} />
              )}
            />
          </LocalizationProvider>
        </div>
        <button className={classes.confirmButton} onClick={confirm}>
          <h1 className={classes.formFont}>Confirm</h1>
        </button>
      </div>
    </div>
  );
}

export default InfoPage;

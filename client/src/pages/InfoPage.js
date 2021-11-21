import React from "react";
import { makeStyles } from "@material-ui/core";

import { useState } from "react";
import background from "../assets/Background_Bubbles.svg";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopTimePicker from "@mui/lab/DesktopTimePicker";
import { useNavigation } from "@react-navigation/native";
import Autocomplete from "react-google-autocomplete";
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

var axios = require("axios");

function calculateTimeDiff(loc1, loc2) {}

function InfoPage() {
  let apiKey = "AIzaSyBSWPuO1QeCaZX9c7IgTQarIievmmk7q50";
  const classes = useStyles();
  const [startLocation, setStartLocation] = useState();
  const [endLocation, setEndLocation] = useState();
  const [daysPrior, setDaysPrior] = useState();
  const [sleepStartTime, setSleepStartTime] = useState(
    new Date("2020-01-01 12:00")
  );
  const [sleepEndTime, setSleepEndTime] = useState(
    new Date("2020-01-01 12:00")
  );
  const navigation = useNavigation();

  return (
    <div className={classes.siteContainer}>
      <div className={classes.container}>
        <div className={classes.inputContainer}>
          <div className={classes.textContainer}>
            <h1 className={classes.formFont}>First Location</h1>
          </div>
          <div className={classes.input}>
            <Autocomplete
              apiKey={apiKey}
              onPlaceSelected={(place) => {
                setStartLocation(place);
              }}
            />
          </div>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.textContainer}>
            <h1 className={classes.formFont}>End Location</h1>
          </div>
          <div className={classes.input}>
            <Autocomplete
              apiKey={apiKey}
              onPlaceSelected={(place) => {
                setEndLocation(place);
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
              type="time"
              value={sleepEndTime}
              onChange={(newValue) => {
                setSleepEndTime(newValue);
                // setSleepEndTime(newValue);
              }}
              renderInput={(params) => (
                <TextField className={classes.timePicker} {...params} />
              )}
            />
          </LocalizationProvider>
        </div>
        <button
          className={classes.confirmButton}
          onClick={() => {
            let apiKey = "AIzaSyBSWPuO1QeCaZX9c7IgTQarIievmmk7q50";
            let timeStamp = (Date.now() || new Date().getTime()) / 1000;
            let timeZoneApiRequestUrl =
              "https://maps.googleapis.com/maps/api/timezone/json?location=" +
              startLocation.geometry.location.lat() +
              "," +
              startLocation.geometry.location.lng() +
              "&timestamp=" +
              timeStamp +
              "&key=" +
              apiKey;

            var config = {
              method: "get",
              url: timeZoneApiRequestUrl,
              headers: {},
            };
            let offSet1, offSet2;
            axios(config).then(function (response) {
              offSet1 = JSON.stringify(response.data.rawOffset / 3600);
              timeZoneApiRequestUrl =
                "https://maps.googleapis.com/maps/api/timezone/json?location=" +
                endLocation.geometry.location.lat() +
                "," +
                endLocation.geometry.location.lng() +
                "&timestamp=" +
                timeStamp +
                "&key=" +
                apiKey;
              config = {
                method: "get",
                url: timeZoneApiRequestUrl,
                headers: {},
              };
              axios(config).then(function (response) {
                offSet2 = JSON.stringify(response.data.rawOffset / 3600);
                let tDiff = offSet2 - offSet1;
                let params = {
                  sleepEnd: sleepEndTime.getHours(),
                  tChange: tDiff,
                };
                navigation.navigate("Schedule", params);
              });
            });
          }}
        >
          <h1 className={classes.formFont}>Confirm</h1>
        </button>
      </div>
    </div>
  );
}

export default InfoPage;

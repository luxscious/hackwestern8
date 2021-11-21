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
  formFont: {
    fontSize: 14,
    fontFamily: "Open Sans",
    color: "#FFFFFF",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 21,
    paddingLeft: 21,
    marginTop: 8,
  },
  input: {
    // width: 347,
    // height: 30,
    paddingLeft: 70,
    // marginTop: 10,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textContainer: {
    flex: "col",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4D4C66",
    borderRadius: 10,
    width: 163,
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
    alignSelf: "center",
    zIndex: 3,
  },
  timePicker: {
    backgroundColor: "white",
  },
  confirmButton: {
    backgroundColor: "#4D4C66",
    width: 224,
    borderRadius: 25,
    border: 0,

    display: "flex",
    alignSelf: "center",
    alignItems: "center",
  },
  bubbles: {
    position: "fixed",
    width: "100%",
    height: "110%",
  },
  pageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  field: {
    borderRadius: 10,
    padding: 11,
    width: 347,
    fontSize: 14,
  },
  daysPrior: {
    flex: "col",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4D4C66",
    borderRadius: 10,
    width: 163,
    marginLeft: -220,
    marginRight: 200,
  },
  inputBox: {
    width: 127,
    marginLeft: -130,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "Open Sans",
    color: "#FFFFFF",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 21,
    paddingLeft: 21,
    marginTop: 8,
    marginLeft: 55,
  },
  timePickerCSS: {
    width: 200,
    margin: 20,
  },
  textContainerSleep: {
    flex: "col",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4D4C66",
    borderRadius: 10,
    width: 163,
    marginRight: 60,
    marginLeft: 170,
  },
}));

var axios = require("axios");
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
    <>
      {/* // <div className={classes.pageContainer}> */}
      <img className={classes.bubbles} src={background} />
      <div className={classes.container}>
        <div className={classes.selection}>
          <div className={classes.inputContainer}>
            <div className={classes.textContainer}>
              <h1 className={classes.formFont}>Starting Location</h1>
            </div>
            <div className={classes.input}>
              <Autocomplete
                className={classes.field}
                apiKey={apiKey}
                onPlaceSelected={(place) => {
                  setStartLocation(place);
                }}
              />
            </div>
          </div>
        </div>
        <div className={classes.selection}>
          <div className={classes.inputContainer}>
            <div className={classes.textContainer}>
              <h1 className={classes.formFont}>End Location</h1>
            </div>
            <div className={classes.input}>
              <Autocomplete
                className={classes.field}
                apiKey={apiKey}
                onPlaceSelected={(place) => {
                  setEndLocation(place);
                }}
              />
            </div>
          </div>
        </div>
        <div className={classes.selection}>
          <div className={classes.inputContainer}>
            <div className={classes.daysPrior}>
              <h1 className={classes.formFont}>Days Prior</h1>
            </div>
            <div>
              <input
                name="daysPrior"
                type="number"
                className={classes.inputBox}
                onChange={(input) => setDaysPrior(input)}
              />
            </div>
          </div>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.textContainerSleep}>
            <h1 className={classes.formFont}>
              Sleep Time <br />
              (Start, Finish)
            </h1>
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
          <h1 className={classes.buttonText}>Confirm</h1>
        </button>
      </div>
    </>
    // {/* </div> */}
  );
}

export default InfoPage;

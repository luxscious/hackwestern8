import ReactDOM from "react-dom";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";



const Separator = styled("div")(
  ({ theme }) => `
  height: ${theme.spacing(3)};
`
);

const marks = [
  {
    value: 4,
    label: "12am",
  },

  {
    value: 8,
    label: "1am",
  },

  {
    value: 12,
    label: "2am",
  },

  {
    value: 16,
    label: "3am",
  },

  {
    value: 20,
    label: "4am",
  },

  {
    value: 24,
    label: "5am",
  },

  {
    value: 28,
    label: "6am",
  },

  {
    value: 32,
    label: "7am",
  },

  {
    value: 36,
    label: "8am",
  },

  {
    value: 40,
    label: "9am",
  },

  {
    value: 44,
    label: "10am",
  },

  {
    value: 48,
    label: "11am",
  },

  {
    value: 52,
    label: "12pm",
  },

  {
    value: 56,
    label: "1pm",
  },

  {
    value: 60,
    label: "2pm",
  },

  {
    value: 64,
    label: "3pm",
  },
  {
    value: 68,
    label: "4pm",
  },
  {
    value: 72,
    label: "5pm",
  },
  {
    value: 76,
    label: "6pm",
  },
  {
    value: 80,
    label: "7pm",
  },
  {
    value: 84,
    label: "8pm",
  },
  {
    value: 88,
    label: "9pm",
  },
  {
    value: 92,
    label: "10pm",
  },
  {
    value: 96,
    label: "11pm",
  },
];

function valuetext(value) {
  return `${value}°C`;
}




const useStyles = makeStyles((theme) => ({
  container: {
    width: "1500px",
    // height: "1080px",
    // position: 'absolute',
    // left: 0,
    // top: 0,
    // display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '14%',
    top: '200px',
    ransform: 'translate(-50%, -50%)'
  },

  slider: {
      trackColor: "grey",
      selectionColor: "black"
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
  Button1: {
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
  buttonContainer:{
    display:"flex",
    flexDirection:"row",
    paddingTop:"150px",
    paddingLeft:"190px"
  },
  buttonSeparator:{
    width:560
  },
  instructions:{
    font: "Open Sans",
    fontSize:"35px",
    fontWeight: "bold",
    color: "white",
  },
  rowDiv:{
    height:100,
  }
}));

export default function SchedulePage() {
  const route = useRoute();
  const [currentTMin, setCurrentTMin] = useState();
  const [targetTMin, setTargetTMin] = useState();
  const [instructions, setInstructions] = useState("");
  const navParams = route.params;
  const sleepEnd = navParams.sleepEnd;
  const tChange = navParams.tChange * 4;
  const navigation = useNavigation();
  useEffect(() => {
    let currTMin = sleepEnd * 4 - 8;
    if (tChange >= 0) {
      let targetTmin = currTMin - tChange;
      let instructions =
        "Today you should view light between " +
        currTMin / 4 +
        " and " +
        (currTMin / 4 + 3) +
        " - you should not view light between " +
        (currTMin / 4 - 5) +
        " and " +
        (currTMin / 4 - 2) +
        ".";

      setCurrentTMin(currTMin);
      setTargetTMin(targetTmin);
      setInstructions(instructions);
    } else {
      let targetTmin = currTMin - tChange;
      let instructions =
        "Today you should view light between " +
        (currTMin / 4 - 5) +
        " and " +
        (currTMin / 4 - 2) +
        " - you should not view light between " +
        currTMin / 4 +
        " and " +
        (currTMin / 4 + 3) +
        ".";
      console.log("CURR MIN", currTMin / 4 - 5);

      setCurrentTMin(currTMin);
      setTargetTMin(targetTmin);
      setInstructions(instructions);
    }
  }, []);
  //From form:
  //sleepEnd
  //tChange from difference in time zones
  const classes = useStyles();
  const followPlan = () => {
    if (tChange > 0) {
      let currentTMinTemp = currentTMin - 8;

      let instructions =
        "Today you should view light between " +
        (currentTMinTemp / 4 - 5) +
        " and " +
        (currentTMinTemp / 4 - 2) +
        " - you should not view light between " +
        currentTMinTemp / 4 +
        " and " +
        (currentTMinTemp / 4 + 3) +
        "";
      setCurrentTMin(currentTMinTemp);
      setInstructions(instructions);
    }
    if (tChange < 0) {
      let currentTMinTemp = currentTMin + 8;
      let instructions =
        "Today you should view light between " +
        (currentTMinTemp / 4 - 5) +
        " and " +
        (currentTMinTemp / 4 - 2) +
        " - you should not view light between " +
        currentTMinTemp / 4 +
        " and " +
        (currentTMinTemp / 4 + 3) +
        "";
      setCurrentTMin(currentTMinTemp);
      setInstructions(instructions);
    }
    if (Math.abs(currentTMin - targetTMin) <= 8) {
      setInstructions("Congrats! You have met your goal.");
      //Navigate back to info page when modal closes
    }
  };

  return (
    <div className={classes.container}>
      <Separator/>
      <h2 className={classes.instructions}>{instructions}</h2>
      <Separator/>
      <div className={classes.rowDiv}></div>
      <Slider 
        key={`slider-${currentTMin}`}
        track={false}
        aria-labelledby="track-false-range-slider"
        getAriaValueText={valuetext}
        defaultValue={[currentTMin, targetTMin]}
        marks={marks}
        className = {classes.slider}
        disabled
      />
      <Separator/>
      <div className={classes.buttonContainer}>
      <button onClick={followPlan} class={classes.Button1}>
        Followed Plan
      </button>
      <div className={classes.buttonSeparator}></div>
      <button 
            onClick={() => {
              navigation.push("Info");
            }} 
            class={classes.Button2}>
        Did Not Follow Plan
      </button>
      </div>
    </div>
  );
}

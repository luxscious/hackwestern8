import ReactDOM from "react-dom";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useRoute } from "@react-navigation/native";

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

function noFollowPlan() {}

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "1080px",
    //position: 'absolute',
    left: 0,
    top: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function SchedulePage() {
  const route = useRoute();
  const [currentTMin, setCurrentTMin] = useState();
  const [targetTMin, setTargetTMin] = useState();
  const [instructions, setInstructions] = useState("");
  const navParams = route.params;
  const sleepEnd = navParams.sleepEnd;
  const tChange = navParams.tChange * 4;

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
      <Separator />
      <h2>{instructions}</h2>
      <Separator />
      <Slider
        key={`slider-${currentTMin}`}
        track={false}
        aria-labelledby="track-false-range-slider"
        getAriaValueText={valuetext}
        defaultValue={[currentTMin, targetTMin]}
        marks={marks}
      />
      <Separator />
      <button class="button" onClick={followPlan}>
        Followed Plan
      </button>
      <Separator />
      <button class="button" onClick={noFollowPlan}>
        Did Not Follow Plan
      </button>
    </div>
  );
}

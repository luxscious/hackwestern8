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
    value: 0,
    label: "12am",
  },

  {
    value: 4,
    label: "1am",
  },

  {
    value: 8,
    label: "2am",
  },

  {
    value: 12,
    label: "3am",
  },

  {
    value: 16,
    label: "4am",
  },

  {
    value: 20,
    label: "5am",
  },

  {
    value: 24,
    label: "6am",
  },

  {
    value: 28,
    label: "7am",
  },

  {
    value: 32,
    label: "8am",
  },

  {
    value: 36,
    label: "9am",
  },

  {
    value: 40,
    label: "10am",
  },

  {
    value: 44,
    label: "11am",
  },

  {
    value: 48,
    label: "12pm",
  },

  {
    value: 52,
    label: "1pm",
  },

  {
    value: 56,
    label: "2pm",
  },

  {
    value: 60,
    label: "3pm",
  },
  {
    value: 64,
    label: "4pm",
  },
  {
    value: 68,
    label: "5pm",
  },
  {
    value: 72,
    label: "6pm",
  },
  {
    value: 76,
    label: "7pm",
  },
  {
    value: 80,
    label: "8pm",
  },
  {
    value: 84,
    label: "9pm",
  },
  {
    value: 88,
    label: "10pm",
  },
  {
    value: 92,
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
  },
}));

export default function SchedulePage() {
  const route = useRoute();
  const [currentTMin, setCurrentTMin] = useState(1);
  const [targetTMin, setTargetTMin] = useState(92);
  const [instructions, setInstructions] = useState("");
  const navParams = route.params;
  const sleepEnd = navParams.sleepEnd;
  const tChange = navParams.tChange * 4;
  //From form:
  //sleepEnd
  //tChange from difference in time zones
  const classes = useStyles();
  const followPlan = () => {
    if (tChange > 0) {
      setCurrentTMin(currentTMin - 8);
    }
    if (tChange < 0) {
      setCurrentTMin(currentTMin + 8);
    }
    if (Math.abs(currentTMin - targetTMin) < 8) {
      setInstructions("Congrats! You have met your goal.");
      //Navigate back to info page when modal closes
    }
  };
  useEffect(() => {
    let currTMin = sleepEnd * 4 - 12;
    if (tChange >= 0) {
      let targetTmin = currTMin - tChange;
      let instructions =
        "You should view light between " +
        (currTMin + 1) +
        " and " +
        (currTMin + 4) +
        ". <br/> You should not view light between " +
        (currTMin - 1) +
        " and " +
        (currTMin - 4) +
        "";
      setCurrentTMin(currTMin);
      setTargetTMin(targetTmin);
      setInstructions(instructions);
    }
  }, []);
  return (
    <div className={classes.container}>
      <Slider
        track={false}
        aria-labelledby="track-false-range-slider"
        getAriaValueText={valuetext}
        defaultValue={[currentTMin, targetTMin]}
        marks={marks}
      />

      <button class="button" onClick={followPlan}>
        Followed Plan
      </button>
      <button class="button" onClick={noFollowPlan}>
        Did Not Follow Plan
      </button>
    </div>
  );
}

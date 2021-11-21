
import ReactDOM  from 'react-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const Separator = styled('div')(
  ({ theme }) => `
  height: ${theme.spacing(3)};
`,
);

const marks = [
  {
    value: 0,
    label: '12am',
  },

  {
    value: 4,
    label: '1am',
  },

  {
    value: 8,
    label: '2am',
  },

  {
    value: 12,
    label: '3am',
  },

  {
    value: 16,
    label: '4am',
  },

  {
    value: 20,
    label: '5am',
  },

  {
    value: 24,
    label: '6am',
  },

  {
    value: 28,
    label: '7am',
  },

  {
    value: 32,
    label: '8am',
  },

  {
    value: 36,
    label: '9am',
  },

  {
    value: 40,
    label: '10am',
  },

  {
    value: 44,
    label: '11am',
  },

  {
    value: 48,
    label: '12pm',
  },

  {
    value: 52,
    label: '1pm',
  },

  {
    value: 56,
    label: '2pm',
  },

  {
    value: 60,
    label: '3pm',
  },
  {
    value: 64,
    label: '4pm',
  },
  {
    value: 68,
    label: '5pm',
  },
  {
    value: 72,
    label: '6pm',
  },
  {
    value: 76,
    label: '7pm',
  },
  {
    value: 80,
    label: '8pm',
  },
  {
    value: 84,
    label: '9pm',
  },
  {
    value: 88,
    label: '10pm',
  },
  {
    value: 92,
    label: '11pm',
  },




];

function valuetext(value) {
  return `${value}°C`;
}




class SchedulePage extends React.Component {
    constructor(props)
    {
      super(props);
      this.state =
      {
        currTMin: 0,
        TargetTMin: 0,
        daysPrior: 0,
        tChange: 0,
        sleepEnd: 0,


      }
    }

    followPlan () {

    }

    noFollowPlan (){

    }


    render ()
    {
        return (
            <div>
                  <Slider
                        track={false}
                        aria-labelledby="track-false-range-slider"
                        getAriaValueText={valuetext}
                        defaultValue={[this.state.currTMin, this.state.TargetTMin]}
                        marks={marks}
                    />

            <button class = 'button' onClick = {this.followPlan}>
                Followed Plan
            </button>   
            <button class = 'button' onClick = {this.noFollowPlan}>
                Did Not Follow Plan
            </button>   
            </div>
        );
    }
}
export default SchedulePage;
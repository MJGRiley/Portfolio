import React from 'react';
import NoteTaker from './pImg/NoteTaker.png'
import OfflineBudget from './pImg/OfflineBudget.png'
import pwgen from './pImg/pwgen.png'
import WDWMWT from './pImg/WDWMWT.png'
import WeatherDashboard from './pImg/WeatherDashboard.png'
import WorkDayScheduler from './pImg/WorkDayScheduler.png'
import WorkoutTracker from './pImg/WorkoutTracker.png'
import './Portfolio.css'
//import redux from './pImg'

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <a href='http://magical-wait-times.herokuapp.com/'
      alt='Magical Wait Times'>
      <img src={WDWMWT} />
      </a><a href='https://mjgriley.github.io/Weather-Dashboard/'
      alt='Weather Dashboard'>
      <img src={WeatherDashboard} />
      </a><a href='https://mjgriley.github.io/Work-Day-Scheduler/'
      alt='Work Day Scheduler'>
      <img src={WorkDayScheduler} />
      </a><a href='https://github.com/MJGRiley/Offline-Budget-Tracker'
      alt='Offline Budget Tracker'>
      <img src={OfflineBudget} />
      </a><a href='https://note-taker-mjgr.herokuapp.com/'
      alt='Note Taker'>
      <img src={NoteTaker} />
      </a><a href='https://mjgriley.github.io/Password-Generator/'
      alt='Password Generator'>
      <img src={pwgen} />
      </a>
    </div>
  );
}

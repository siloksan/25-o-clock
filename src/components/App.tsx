import React, {useEffect, useState} from 'react';
import LengthControllers from "./LengthControllers";
import Timer from "./Timer";
import TimerController from "./TimerController";
import { millisecondsToTime } from '../utils';
import {connect, useSelector} from 'react-redux';
import {bindActionCreators} from "@reduxjs/toolkit";
import timerSlice from "../reducers";

import '../style/index.css';

function App({ start, timerWorks }) {

  const state = useSelector(state => state.timer)

  const { isRun, time } = state
  console.log(isRun, time);

  useEffect(() => {
    let currentTimer = null
    if (isRun && time > 0) {
      currentTimer = setInterval(timerWorks, 1000)
    }

    return () => clearInterval(currentTimer)
  }, [isRun, time])

  const currentTimeFormatted = millisecondsToTime(time)

  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__title">25 + 5 Clock</h1>
        <div className="app__main main">
          <LengthControllers />
          <Timer currentTimeFormatted={currentTimeFormatted}/>
          <TimerController startTimer={start}/>
          <div className="author">
            Designed and Coded by<br/>
            <a href="https://github.com/siloksan">Kurtin Evgeniy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const { start, timerWorks } = timerSlice.actions

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    start,
    timerWorks
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(App);

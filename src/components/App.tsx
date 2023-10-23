import React, {useEffect, useState, FC} from 'react';
import LengthControllers from "./LengthControllers";
import Timer from "./Timer";
import TimerController from "./TimerController";
import { millisecondsToTime } from '../utils';
import {ConnectedProps, connect, useSelector} from 'react-redux';
import {bindActionCreators} from "@reduxjs/toolkit";
import timerSlice from "../reducers";
import { RootState } from '../store';

import '../style/index.css';

const App = () => {

  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__title">25 + 5 Clock</h1>
        <div className="app__main main">
          <LengthControllers />
          <Timer />
          <TimerController />
          <div className="author">
            Designed and Coded by
            <br />
            <a href="https://github.com/siloksan">Kurtin Evgeniy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

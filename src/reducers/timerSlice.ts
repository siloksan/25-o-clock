import { createSlice } from '@reduxjs/toolkit';
import {
  start,
  timerWorks,
  resetTimer,
  breakDecrement,
  breakIncrement,
  sessionDecrement,
  sessionIncrement
} from '../actions';

export interface ITimerState {
  currentTime: number;
  isRun: boolean;
  breakLength: number;
  sessionLength: number;
  currentInterval: 'Session' | 'Break';
  soundReset: boolean
}

export const initialState: ITimerState = {
  currentTime: 1500000,
  isRun: false,
  breakLength: 300000,
  sessionLength: 1500000,
  currentInterval: 'Session',
  soundReset: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    start,
    timerWorks,
    resetTimer,
    breakDecrement,
    breakIncrement,
    sessionDecrement,
    sessionIncrement,
  },
});

export default timerSlice;

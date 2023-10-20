import {createSlice} from '@reduxjs/toolkit';
import {start, timerWorks} from "../actions";

const initialState = {
  time: 1500000,
  isRun: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    start,
    timerWorks
  }
});

export default timerSlice
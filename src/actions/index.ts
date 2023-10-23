import { ITimerState, initialState } from "../reducers/timerSlice";

// =======helper=============
const incrementAndDecremen = (state: ITimerState, key, factor) => {
  if (state[key] > 0 && state[key] < 3600000) return (state[key] -= factor * 60000);
};

// ========action============
export const start = (state: ITimerState, action) => {
  state.isRun = !state.isRun;
};

export const timerWorks = (state: ITimerState, action) => {
  state.currentTime -= 1000;
};

export const resetTimer = (state: ITimerState, action) => {
  state.isRun = false;
  state.currentTime = initialState.currentTime;
  state.breakLength = initialState.breakLength;
  state.sessionLength = initialState.sessionLength
};

export const breakDecrement = (state: ITimerState, action) => {
  incrementAndDecremen(state, 'breakLength', 1)
};

export const breakIncrement = (state: ITimerState, action) => {
  incrementAndDecremen(state, 'breakLength', -1);
};

export const sessionDecrement = (state: ITimerState, action) => {
  incrementAndDecremen(state, 'sessionLength', 1);
};

export const sessionIncrement = (state: ITimerState, action) => {
  incrementAndDecremen(state, 'sessionLength', -1);
};
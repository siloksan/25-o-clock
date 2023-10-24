import { ITimerState, initialState } from '../reducers/timerSlice';

// =======helper=============
const incrementAndDecremen = (state: ITimerState, key, factor) => {
  if (state[key] > 60000 && factor < 0) {
    return (state[key] += factor * 60000);
  } else if (state[key] < 3600000 && factor > 0) {
    return (state[key] += factor * 60000);
  }
};

// ========action============
export const start = (state: ITimerState, action) => {
  const { currentTime, sessionLength } = state;
  state.isRun = !state.isRun;
  state.soundReset = false;
};

export const timerWorks = (state: ITimerState, action) => {
  const { isRun, currentTime, sessionLength, breakLength, currentInterval } =
    state;
  if (isRun) {
    if (currentTime > 0) {
      state.currentTime -= 1000;
    } else if (currentInterval === 'Session') {
      state.currentInterval = 'Break';
      state.currentTime = breakLength;
    } else if (currentInterval === 'Break') {
      state.currentInterval = 'Session';
      state.currentTime = sessionLength;
    }
  }
};

export const resetTimer = (state: ITimerState, action) => {
  state.soundReset = true;
  state.isRun = false;
  state.currentTime = initialState.currentTime;
  state.breakLength = initialState.breakLength;
  state.sessionLength = initialState.sessionLength;
  state.currentInterval = 'Session';
};

export const breakDecrement = (state: ITimerState, action) => {
  incrementAndDecremen(state, 'breakLength', -1);
};

export const breakIncrement = (state: ITimerState, action) => {
  incrementAndDecremen(state, 'breakLength', 1);
};

export const sessionDecrement = (state: ITimerState, action) => {
  const { currentTime, sessionLength, isRun } = state;
  incrementAndDecremen(state, 'sessionLength', -1);
  if (!isRun) {
    incrementAndDecremen(state, 'currentTime', -1);
  }
};

export const sessionIncrement = (state: ITimerState, action) => {
  const { currentTime, sessionLength, isRun } = state;
  incrementAndDecremen(state, 'sessionLength', 1);
  if (!isRun) {
    incrementAndDecremen(state, 'currentTime', 1);
  }
};

import React, { FC, useEffect } from 'react';
import { ConnectedProps, connect, useSelector } from 'react-redux';
import { RootState } from '../store';
import { millisecondsToTime } from '../utils';
import timerSlice from '../reducers';
import { Dispatch, bindActionCreators } from '@reduxjs/toolkit';

type TimerControllerProps = ConnectedProps<typeof connector>;

const Timer: FC<TimerControllerProps> = ({ timerWorks }) => {
  const { isRun, currentTime } = useSelector(
    (state: RootState) => state.timer
  );

  console.log(isRun, currentTime);

  useEffect(() => {
    let currentTimer: NodeJS.Timeout | null = null;
    if (isRun && currentTime > 0) {
      currentTimer = setInterval(timerWorks, 1000);
    }

    return () => clearInterval(currentTimer);
  }, [isRun, currentTime]);

  const currentTimeFormatted = millisecondsToTime(currentTime);

  return (
    <div className="main__timer timer">
      <h3 className="timer__label" id="timer-label">
        Session
      </h3>
      <div className="timer__left" id="time-left">
        {currentTimeFormatted}
      </div>
    </div>
  );
};

const { timerWorks } = timerSlice.actions;

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      timerWorks,
    },
    dispatch
  );
};

const connector = connect(null, mapDispatchToProps);

export default connector(Timer);
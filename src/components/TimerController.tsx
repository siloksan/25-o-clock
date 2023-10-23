import React, { FC } from 'react';
import timerSlice from '../reducers';
import { Dispatch, bindActionCreators } from '@reduxjs/toolkit';
import { ConnectedProps, connect, useSelector } from 'react-redux';
import { RootState } from '../store';

type TimerControllerProps = ConnectedProps<typeof connector>;

const TimerController: FC<TimerControllerProps> = ({ start, resetTimer }) => {
  const { isRun } = useSelector((state: RootState) => state.timer);

  return (
    <div className="main__timer-controller timer-controller">
      <div
        className="timer-controller__start-stop _btn"
        onClick={() => start(undefined)}
        id="start_stop"
      >
        {isRun ? (
          <img src="../img/stop.svg" alt="star stop timer" className="_svg" />
        ) : (
          <img src="../img/start.svg" alt="star stop timer" className="_svg" />
        )}
      </div>
      <div id="reset" className="timer-controller__reset _btn" onClick={() => resetTimer(undefined)}>
        <img src="../img/reset.svg" alt="reset timer" className="_svg" />
      </div>
    </div>
  );
};

const { start, resetTimer } = timerSlice.actions;

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      start,
      resetTimer,
    },
    dispatch
  );
};

const connector = connect(null, mapDispatchToProps);

export default connector(TimerController);

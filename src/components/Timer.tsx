import React, { FC, useEffect, useRef } from 'react';
import { ConnectedProps, connect, useSelector } from 'react-redux';
import { RootState } from '../store';
import { millisecondsToTime } from '../utils';
import timerSlice from '../reducers';
import { Dispatch, bindActionCreators } from '@reduxjs/toolkit';

type TimerControllerProps = ConnectedProps<typeof connector>;

const Timer: FC<TimerControllerProps> = ({ timerWorks }) => {
  const { isRun, currentTime, currentInterval, soundReset } = useSelector(
    (state: RootState) => state.timer
  );

  const audioRef = document.getElementById('beep') as HTMLAudioElement;

      if (currentTime === 0) {
        // Воспроизводим звук по достижению таймера 0
        if (audioRef) {
          audioRef.play();
        }
      }
      if (soundReset) {
        if (audioRef) {
          // audioRef.current.load();
          audioRef.pause();
          audioRef.currentTime = 0;
        }
      }

  useEffect(() => {
    let currentTimer: NodeJS.Timeout | null = null;
    currentTimer = setInterval(timerWorks, 1000);
    console.log(isRun, currentTime, 'soundPause:', soundReset);

    return () => clearInterval(currentTimer);
  }, [isRun, currentTime, soundReset]);

  const currentTimeFormatted = millisecondsToTime(currentTime);

  return (
    <div className="main__timer timer">
      <h3 className="timer__label" id="timer-label">
        {currentInterval}
      </h3>
      <div className="timer__left" id="time-left">
        {currentTimeFormatted}
      </div>
      <audio
        id="beep"
        // ref={audioRef}
        src="../sound/mixkit-city-alert-siren-loop-1008.wav"
        preload="auto"
      ></audio>
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

import React from 'react';

interface TimerProps {
  currentTimeFormatted: string
}

const Timer = ({ currentTimeFormatted }: TimerProps) => {
  return (
    <div className="main__timer timer">
      <h3 className="timer__label" id="timer-label">Session</h3>
      <div className="timer__left" id="time-left">{currentTimeFormatted}</div>
    </div>
  );
};

export default Timer;
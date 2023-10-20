import React from 'react';

const TimerController = ({ startTimer }) => {
  return (
    <div className="main__timer-controller timer-controller">
      <div className="timer-controller__start-stop _btn" onClick={() => startTimer()}>
        <img src="../img/start.svg" alt="star stop timer" id="start_stop" className="_svg"/>
      </div>
      <div className="timer-controller__reset _btn">
        <img src="../img/reset.svg" alt="reset timer" id="reset" className="_svg"/>
      </div>
    </div>
  );
};

export default TimerController;
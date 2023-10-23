import React from 'react';
import timerSlice from '../reducers';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { connect, useSelector } from 'react-redux';
import { RootState } from '../store';

const LengthControllers = ({
  breakDecrement,
  breakIncrement,
  sessionDecrement,
  sessionIncrement,
}) => {
  const { breakLength, sessionLength } = useSelector(
    (state: RootState) => state.timer
  );

  return (
    <div className="main__length-controllers">
      <div className="main__length-controller length-controller">
        <h3 className="length-controller__title" id="break-length">
          Break Length
        </h3>
        <div className="length-controller__block-control">
          <div
            className="length-controller__btn _btn"
            id="break-decrement"
            onClick={() => breakDecrement()}
          >
            <img
              src="../img/arrow-down.svg"
              alt="arrow down"
              className="_svg"
            />
          </div>
          <div className="length-controller__number" id="break-length">
            {breakLength / 60000}
          </div>
          <div
            className="length-controller__btn _btn"
            id="break-increment"
            onClick={() => breakIncrement()}
          >
            <img src="../img/arrow-up.svg" alt="arrow up" className="_svg" />
          </div>
        </div>
      </div>
      <div className="main__length-controller length-controller">
        <h3 className="length-controller__title" id="session-label">
          Session Length
        </h3>
        <div className="length-controller__block-control">
          <div
            className="length-controller__btn _btn"
            id="session-decrement"
            onClick={() => sessionDecrement()}
          >
            <img
              src="../img/arrow-down.svg"
              alt="arrow down"
              className="_svg"
            />
          </div>
          <div className="length-controller__number" id="session-length">
            {sessionLength / 60000}
          </div>
          <div
            className="length-controller__btn _btn"
            id="session-increment"
            onClick={() => sessionIncrement()}
          >
            <img src="../img/arrow-up.svg" alt="arrow up" className="_svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

const { breakDecrement, breakIncrement, sessionDecrement, sessionIncrement } =
  timerSlice.actions;

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      breakDecrement,
      breakIncrement,
      sessionDecrement,
      sessionIncrement,
    },
    dispatch
  );
};

const connector = connect(null, mapDispatchToProps);

export default connector(LengthControllers);
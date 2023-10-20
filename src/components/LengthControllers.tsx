import React from 'react';

const LengthControllers = () => {
  return (
      <div className="main__length-controllers">
        <div className="main__length-controller length-controller">
          <h3 className="length-controller__title" id="break-length">
            Break Length
          </h3>
          <div className="length-controller__block-control" id="break-decrement">
            <div className="length-controller__btn _btn">
              <img src="../img/arrow-down.svg" alt="arrow down" className="_svg"/>
            </div>
            <div className="length-controller__number" id="break-length">
              5
            </div>
            <div className="length-controller__btn _btn" id="break-increment">
              <img src="../img/arrow-up.svg" alt="arrow up" className="_svg"/>
            </div>
          </div>
        </div>
        <div className="main__length-controller length-controller">
          <h3 className="length-controller__title" id="session-label">
            Session Length
          </h3>
          <div className="length-controller__block-control">
            <div className="length-controller__btn _btn" id="session-decrement">
              <img src="../img/arrow-down.svg" alt="arrow down" className="_svg"/>
            </div>
            <div className="length-controller__number" id="session-length">
              25
            </div>
            <div className="length-controller__btn _btn" id="session-increment">
              <img src="../img/arrow-up.svg" alt="arrow up" className="_svg"/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LengthControllers;
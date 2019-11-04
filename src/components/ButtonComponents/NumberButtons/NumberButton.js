import React from 'react';

const NumberButton = props => {
  return (
    <div>
      <button
        className="btn number-btn"
        onClick={() => props.numberClick(props.numbersMapped)}
      >
        {props.numbersMapped}
      </button>
    </div>
  );
};

export default NumberButton;

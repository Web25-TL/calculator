import React, { useState } from 'react';
import { operators } from '../../../data';
import OperatorButton from './OperatorButton';

const Operators = props => {
  const [ourOperators, setOperators] = useState(operators);

  return (
    <div className="operators-container">
      {ourOperators.map(info => (
        <OperatorButton
          key={info}
          operatorsMapped={info.char}
          operatorClick={props.operatorClick}
          opFunc={info.op}
        />
      ))}
    </div>
  );
};

export default Operators;

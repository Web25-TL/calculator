import React, { useState } from 'react';
import { numbers } from '../../../data';
import NumberButton from './NumberButton';

const Numbers = props => {
  const [ourNumbers, setNumbers] = useState(numbers);
  const numbersMapped = ourNumbers.map(elements => elements);

  return (
    <div className="numbers-container-2">
      {ourNumbers.map(info => (
        <NumberButton
          key={info}
          numbersMapped={info}
          numberClick={props.numberClick}
        />
      ))}
    </div>
  );
};

export default Numbers;

import React, { useState } from 'react';
import { specials } from '../../../data';
import SpecialButton from './SpecialButton';

const Specials = props => {
  const [ourSpecials, setSpecials] = useState(specials);
  const specialsMapped = ourSpecials.map(elements => elements);

  return (
    <div className="special-buttons-container">
      {ourSpecials.map(info => (
        <SpecialButton
          key={info}
          specialsMapped={info}
          specialButtonClick={props.value}
        />
      ))}
    </div>
  );
};

export default Specials;

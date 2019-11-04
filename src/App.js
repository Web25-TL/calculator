import React, { useState, useEffect } from 'react';
import './App.css';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Logo from './components/DisplayComponents/Logo';
import Display from './components/DisplayComponents/Display.js';

function App() {
  const [display, setDisplay] = useState('');
  const [amount, setAmount] = useState(undefined);
  const [operator, setOperator] = useState(undefined);

  function numberButtonClick(itemData) {
    setDisplay(val => val + itemData);
  }

  function operatorButtonClick(itemData) {
    if (!operator) {
      setAmount(() => Number(display));
      setDisplay(() => '');
    } else {
      const leftVal = Number(display);
      const result = operator(amount, leftVal);
      setAmount(() => result);
      setDisplay(() => result);
    }
    setOperator(() => itemData);
  }

  function specialButtonClick(itemData) {
    const amt = amount ? amount : Number(display);

    if (itemData === 'C') {
      setAmount(() => undefined);
      setDisplay(() => '');
    }

    if (itemData === '%') {
      setAmount(() => amt / 100);
      setDisplay(() => amt / 100);
    }

    if (itemData === '+/-') {
      setAmount(() => -amt);
      setDisplay(() => -amt);
    }
  }

  return (
    <div className="container">
      <div className="App">
        <div className="app-container">
          <Logo />
          <div className="container-enter">
            <Display value={display} />
          </div>
          <div className="bigger-container">
            <div className="container-sp-num">
              <Specials value={specialButtonClick} />
              <Numbers numberClick={numberButtonClick} />
            </div>
            <div className="container-operators">
              <Operators operatorClick={operatorButtonClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

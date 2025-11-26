import React, { useState } from "react";
import '../assets/styles/components/Switch.css'
import { onMoveSwitchAddChar, cleanResults } from '../services/calcaptoServices'

const Switch = (props) => {
  const [active, setActive] = useState(props.prop1);

  const handleClick = (value) => {
    setActive(value);
    props.setVisible(0);
    props.fun(value);
  };

  return (
    <div className="switch-toggle">
      <button
        className={`switch-option ${active === props.prop1 ? 'active' : ''}`}
        onClick={() => handleClick(props.prop1)}
      >
        {props.prop1 === 'month' ? 'Mensual' : props.prop1 === 'yes' ? 'Sí' : props.prop1}
      </button>
      <button
        className={`switch-option ${active === props.prop2 ? 'active' : ''}`}
        onClick={() => handleClick(props.prop2)}
      >
        {props.prop2 === 'anual' ? 'Anual' : props.prop2 === 'no' ? 'No' : props.prop2}
      </button>
    </div>
  );
};

export default Switch;

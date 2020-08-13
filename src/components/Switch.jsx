import React from "react";
import '../assets/styles/components/Switch.css'
import {onMoveSwitchAddChar,cleanResults} from '../services/calcaptoServices'

const Switch = (props) => {
    let classIni;
    if(props.ini===props.prop1){
        classIni="";
    }
    else{
        classIni="swith-move"
    }
    const onChangeSwitch=(e)=>{
        cleanResults(props);
        onMoveSwitchAddChar(e,props.id,props.prop1,props.prop2,props.fun);
      }
    return (
    <div id={props.id} onClick={onChangeSwitch} className="switch">
      <div className="switch-base">
        <div className={`switch-circle ${classIni}`}></div>
      </div>
    </div>
  );
};

export default Switch;

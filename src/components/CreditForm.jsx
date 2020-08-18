import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import {setRateType,addCreditVals,setVisible,setIsWithIni} from '../actions/actions'
import {genericEvent,cleanResults} from '../services/calcaptoServices'
import Switch from './Switch'


const CreditForm =(props)=>{
  const formCreditForm=props.formCreditForm;
 // const [formCreditForm,setFormCreditForm] = useState(initData);

 const onEvent=(e)=>{
  genericEvent(e);
 }
const onChangeFormCredit=(e)=>{
  cleanResults(props);
  props.addCreditVals({...formCreditForm, [e.target.id]:e.target.value});
  
}
//Todo
/*
useEffect(()=>{
try{
  let nTasa=0;
  if(props.rateType==='month'){
    nTasa=1;
  }
  else{
    nTasa=12;
  }
  const element=document.getElementById('nRateAn');

  element.value=nTasa;
  props.addCreditVals({...formCreditForm, 'nMonths':nMonths});
}
catch(e){
  console.log('error',e)
}
},[props.rateType])
*/
    return ( <div className="inits">
    <h1>Datos</h1>
   
    <label htmlFor="vPropertie">($) Valor del inmueble</label>
    <input type="text" id="vProperties"  defaultValue={formCreditForm.vProperties} onBlur={onEvent}  onChange={onChangeFormCredit} placeholder="Ejemplo: $400.000.000.00" />

    <label htmlFor="nMonths">Número de meses</label>
    <input type="text" id="nMonths" defaultValue={formCreditForm.nMonths} onChange={onChangeFormCredit} placeholder="Ejemplo: 5"/>
    <div className="label-switch">
     <Switch id='tipoTasa' setVisible={props.setVisible} prop1='month' prop2='anual' fun={props.setRateType}/>
<label htmlFor="nRateAn">{props.rateType==='anual'?'(%)Tasa Anual':'(%)Tasa mensual'}</label>
</div>
    <input type="text" id="nRateAn" defaultValue={formCreditForm.nRateAn} onChange={onChangeFormCredit} placeholder="Ejemplo: 12%" />
    <div className="label-switch">
    <Switch id='conInicial' setVisible={props.setVisible} prop1='yes' prop2='no' fun={props.setIsWithIni}/>
    <label htmlFor="conInicial">{props.withAccInit==='yes'?'Con cuota inicial':'Sin cuota inicial'}</label>
    </div>
    {props.withAccInit==='yes'?<>
    <hr/>
 

    <label htmlFor="tIntRate">(%)Porcentaje cuota inicial</label>
    <input type="text" id="tIntRate"   defaultValue={formCreditForm.tIntRate} onChange={onChangeFormCredit} placeholder="Ejemplo: 30%" />

    <label htmlFor="nNMonths">Meses cuota inicial</label>
    <input type="text" id="nNMonths"  defaultValue={formCreditForm.nNMonths} onChange={onChangeFormCredit} placeholder="Ejemplo: 20" />
    </>:<></>
    }

  </div>)
}


const mapStateToProps=(state)=>{
  return {
    formCreditForm:state.jCreditForm,
    rateType:state.params.rateType,
    withAccInit:state.params.withAccInit
  }
}
const mapActionsToProps={
  addCreditVals,
  setVisible,
  setRateType,
  setIsWithIni
}
export default connect(mapStateToProps,mapActionsToProps)(CreditForm)
import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import {addCreditVals,setVisible} from '../actions/actions'
import {genericEvent} from '../services/calcaptoServices'

const CreditForm =(props)=>{
  const formCreditForm=props.formCreditForm;
 // const [formCreditForm,setFormCreditForm] = useState(initData);

 const onEvent=(e)=>{
  genericEvent(e);
 }
const onChangeFormCredit=(e)=>{
  props.setVisible(0);
  const elementCalc=document.getElementById('icon-anim');
  elementCalc.classList.remove('icon-exec-ok');
  elementCalc.classList.add('icon-exec-anim');
  props.addCreditVals({...formCreditForm, [e.target.id]:e.target.value});
  
}

    return ( <div className="inits">
    <h1>Datos</h1>
    <label htmlFor="vPropertie">Valor del inmueble</label>
    <input type="text" id="vProperties"  defaultValue={formCreditForm.vProperties} onBlur={onEvent}  onChange={onChangeFormCredit} placeholder="Ejemplo: $400.000.000.00" />

    <label htmlFor="nMonths">Numero de meses</label>
    <input type="text" id="nMonths" defaultValue={formCreditForm.nMonths} onChange={onChangeFormCredit} placeholder="Ejemplo: 5"/>
    <label htmlFor="nRateAn">Tasa anual</label>
    <input type="text" id="nRateAn" defaultValue={formCreditForm.nRateAn} onChange={onChangeFormCredit} placeholder="Ejemplo: 12%" />
    <hr/>

    <label htmlFor="tIntRate">Porcentaje cuota inicial</label>
    <input type="text" id="tIntRate"   defaultValue={formCreditForm.tIntRate} onChange={onChangeFormCredit} placeholder="Ejemplo: 30%" />

    <label htmlFor="nNMonths">Meses cuota inicial</label>
    <input type="text" id="nNMonths"  defaultValue={formCreditForm.nNMonths} onChange={onChangeFormCredit} placeholder="Ejemplo: 20" />


  </div>)
}


const mapStateToProps=(state)=>{
  return {
    formCreditForm:state.jCreditForm,
  }
}
const mapActionsToProps={
  addCreditVals,
  setVisible
}
export default connect(mapStateToProps,mapActionsToProps)(CreditForm)
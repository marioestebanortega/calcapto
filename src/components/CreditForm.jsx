import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import {addCreditVals} from '../actions/actions'

const CreditForm =(props)=>{
  const formCreditForm=props.formCreditForm;
 // const [formCreditForm,setFormCreditForm] = useState(initData);

const onChangeFormCredit=(e)=>{
  props.addCreditVals({...formCreditForm, [e.target.id]:e.target.value});
}

    return ( <div className="inits">
    <h1>Datos</h1>
    <label htmlFor="vPropertie">Valor del inmueble</label>
    <input type="text" id="vProperties"  defaultValue={formCreditForm.vProperties} onChange={onChangeFormCredit} placeholder="$400.000.000.00" />

    <label htmlFor="nMonths">Numero de meses</label>
    <input type="text" id="nMonths" defaultValue={formCreditForm.nMonths} onChange={onChangeFormCredit} placeholder="5"/>
    <label htmlFor="nRateAn">Tasa anual</label>
    <input type="text" id="nRateAn" defaultValue={formCreditForm.nRateAn} onChange={onChangeFormCredit} placeholder="12%" />
    <hr/>

    <label htmlFor="tIntRate">Porcentaje cuota inicial</label>
    <input type="text" id="tIntRate"   defaultValue={formCreditForm.tIntRate} onChange={onChangeFormCredit} placeholder="30%" />

    <label htmlFor="nNMonths">Meses cuota inicial</label>
    <input type="text" id="nNMonths"  defaultValue={formCreditForm.nNMonths} onChange={onChangeFormCredit} placeholder="20" />


  </div>)
}


const mapStateToProps=(state)=>{
  return {
    formCreditForm:state.jCreditForm
  }
}
const mapActionsToProps={
  addCreditVals,
}
export default connect(mapStateToProps,mapActionsToProps)(CreditForm)
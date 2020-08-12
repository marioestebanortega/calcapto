import React,{useState,useEffect} from "react";
import { connect } from "react-redux";
import {addAddsVals} from '../actions/actions'
import {genericEvent} from '../services/calcaptoServices'


const AddValues = (props) => {
    const formAddForm=props.formAddForm;

    const onChangeFormCredit=(e)=>{
    props.addAddsVals({...formAddForm, [e.target.id]:e.target.value});
    }
    const onEvent=(e)=>{
      genericEvent(e);
     }

  
  return (
    <div className="inits">
      <h1>Abonos</h1>
      <label htmlFor="addCredit">Abono crédito</label>
      <input type="text" id="addCredit" placeholder="Ejemplo: 40"  defaultValue={formAddForm.addCredit} onBlur={onEvent} onChange={onChangeFormCredit}/>

      <label htmlFor="addIni">Abono cuota inicial</label>
      <input type="text" id="addIni" placeholder="Ejemplo: 30"  defaultValue={formAddForm.addIni} onBlur={onEvent} onChange={onChangeFormCredit} />
    </div>
  );
};

const mapStateToProps=(state)=>{
  return {
    formAddForm:state.jAddValues
  }
}
const mapActionsToProps={
  addAddsVals,
}
export default connect (mapStateToProps,mapActionsToProps)(AddValues);

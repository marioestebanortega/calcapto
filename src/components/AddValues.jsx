import React,{useState,useEffect} from "react";
import { connect } from "react-redux";
import {addAddsVals} from '../actions/actions'


const AddValues = (props) => {
    const formAddForm=props.formAddForm;

    const onChangeFormCredit=(e)=>{
    props.addAddsVals({...formAddForm, [e.target.id]:e.target.value});
    }

  
  return (
    <div className="inits">
      <h1>Abonos</h1>
      <label htmlFor="addCredit">Abono crédito</label>
      <input type="text" id="addCredit" placeholder="$0"  defaultValue={formAddForm.addCredit} onChange={onChangeFormCredit}/>

      <label htmlFor="addIni">Abono cuota inicial</label>
      <input type="text" id="addIni" placeholder="$0"  defaultValue={formAddForm.addIni} onChange={onChangeFormCredit} />
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

import React from "react";
import { connect } from "react-redux";
import {addAddsVals,setVisible} from '../actions/actions'
import {genericEvent,cleanResults} from '../services/calcaptoServices'


const AddValues = (props) => {
    const formAddForm=props.formAddForm;

    const onChangeFormCredit=(e)=>{
      cleanResults(props);
    props.addAddsVals({...formAddForm, [e.target.id]:e.target.value});
    }
    const onEvent=(e)=>{
      genericEvent(e);
     }

  
  return (
    <div className="inits">
      <h1>Abonos</h1>
      <label htmlFor="addCredit">($)Abono crédito</label>
      <input type="text" id="addCredit" placeholder="Ejemplo: 40"  defaultValue={formAddForm.addCredit} onBlur={onEvent} onChange={onChangeFormCredit}/>

      {props.withAccInit==='yes'?<>
      <label htmlFor="addIni">($)Abono cuota inicial</label>
      <input type="text" id="addIni" placeholder="Ejemplo: 30"  defaultValue={formAddForm.addIni} onBlur={onEvent} onChange={onChangeFormCredit} />
      </>:<></>}
    </div>
  );
};

const mapStateToProps=(state)=>{
  return {
    formAddForm:state.jAddValues,
    withAccInit:state.params.withAccInit
  }
}
const mapActionsToProps={
  addAddsVals,
  setVisible
}
export default connect (mapStateToProps,mapActionsToProps)(AddValues);

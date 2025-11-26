import React from "react";
import { connect } from "react-redux";
import { addAddsVals, setVisible } from '../actions/actions'
import { genericEvent, cleanResults } from '../services/calcaptoServices'


const AddValues = (props) => {
  const formAddForm = props.formAddForm;

  const onChangeFormCredit = (e) => {
    cleanResults(props);
    props.addAddsVals({ ...formAddForm, [e.target.id]: e.target.value });
  }
  const onEvent = (e) => {
    genericEvent(e);
  }


  return (
    <div className="add-values-section">
      <h2>Abonos</h2>

      <div className="input-group">
        <label htmlFor="addCredit">Abono al Crédito ($)</label>
        <input type="text" id="addCredit" placeholder="0" value={formAddForm.addCredit} onBlur={onEvent} onChange={onChangeFormCredit} />
      </div>

      {props.withAccInit === 'yes' && (
        <div className="input-group">
          <label htmlFor="addIni">Abono a Cuota Inicial ($)</label>
          <input type="text" id="addIni" placeholder="0" value={formAddForm.addIni} onBlur={onEvent} onChange={onChangeFormCredit} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formAddForm: state.jAddValues,
    withAccInit: state.params.withAccInit
  }
}
const mapActionsToProps = {
  addAddsVals,
  setVisible
}
export default connect(mapStateToProps, mapActionsToProps)(AddValues);

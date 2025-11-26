import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setRateType, addCreditVals, setVisible, setIsWithIni } from '../actions/actions'
import { genericEvent, cleanResults } from '../services/calcaptoServices'
import Switch from './Switch'


const CreditForm = (props) => {
  const formCreditForm = props.formCreditForm;
  // const [formCreditForm,setFormCreditForm] = useState(initData);

  const onEvent = (e) => {
    genericEvent(e);
  }
  const onChangeFormCredit = (e) => {
    cleanResults(props);
    props.addCreditVals({ ...formCreditForm, [e.target.id]: e.target.value });

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
  return (
    <div className="credit-form-container">
      <h1>Configurar Crédito</h1>

      <div className="input-group">
        <label htmlFor="vProperties">Valor del Inmueble</label>
        <input type="text" id="vProperties" value={formCreditForm.vProperties} onBlur={onEvent} onChange={onChangeFormCredit} placeholder="$0" />
        <input type="range" id="vProperties" min="50000000" max="1000000000" step="1000000" value={String(formCreditForm.vProperties).replace(/,/g, '')} onChange={onChangeFormCredit} />
      </div>

      <div className="input-group">
        <label htmlFor="nMonths">Plazo (Meses): {formCreditForm.nMonths}</label>
        <input type="range" id="nMonths" min="12" max="360" step="12" value={formCreditForm.nMonths} onChange={onChangeFormCredit} />
      </div>

      <div className="input-group">
        <div className="label-switch">
          <label>Tipo de Tasa</label>
          <Switch id='tipoTasa' setVisible={props.setVisible} prop1='month' prop2='anual' fun={props.setRateType} />
        </div>
        <label htmlFor="nRateAn">{props.rateType === 'anual' ? 'Tasa Anual (%)' : 'Tasa Mensual (%)'}</label>
        <input type="text" id="nRateAn" value={formCreditForm.nRateAn} onChange={onChangeFormCredit} placeholder="Ejemplo: 12%" />
      </div>

      <div className="input-group">
        <div className="label-switch">
          <label>¿Tiene Cuota Inicial?</label>
          <Switch id='conInicial' setVisible={props.setVisible} prop1='yes' prop2='no' fun={props.setIsWithIni} />
        </div>
      </div>

      {props.withAccInit === 'yes' && (
        <div className="down-payment-section">
          <div className="input-group">
            <label htmlFor="tIntRate">Porcentaje Inicial (%)</label>
            <input type="range" id="tIntRate" min="0" max="100" value={formCreditForm.tIntRate} onChange={onChangeFormCredit} />
            <div style={{ textAlign: 'right', fontWeight: 'bold' }}>{formCreditForm.tIntRate}%</div>
          </div>

          <div className="input-group">
            <label htmlFor="nNMonths">Plazo Inicial (Meses)</label>
            <input type="text" id="nNMonths" value={formCreditForm.nNMonths} onChange={onChangeFormCredit} />
          </div>
        </div>
      )}
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    formCreditForm: state.jCreditForm,
    rateType: state.params.rateType,
    withAccInit: state.params.withAccInit
  }
}
const mapActionsToProps = {
  addCreditVals,
  setVisible,
  setRateType,
  setIsWithIni
}
export default connect(mapStateToProps, mapActionsToProps)(CreditForm)
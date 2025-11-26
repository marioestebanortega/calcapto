import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { saveToHistory } from '../services/calcaptoServices';


const Results = (props) => {
  useEffect(() => {
    location.href = "#inits"
  }, [])
  const data = props.data;
  const fullState = {
    jCreditForm: props.jCreditForm,
    jAddValues: props.jAddValues,
    params: props.params,
    result: props.data
  };

  const handleSave = () => {
    if (saveToHistory(fullState)) {
      // Dispatch custom event to notify History component
      window.dispatchEvent(new Event('historyUpdated'));
    }
  }

  return (
    <div className="results-card">
      <h2>Resultado del Crédito</h2>

      <div className="monthly-payment-section">
        <div className="monthly-label">Cuota Mensual Estimada</div>
        <div className="monthly-payment">{data.valAcc}</div>
      </div>

      <div className="breakdown-grid">
        <div className="breakdown-item">
          <div className="breakdown-label">Valor del Crédito</div>
          <div className="breakdown-value">{data.valCredit}</div>
        </div>

        <div className="breakdown-item">
          <div className="breakdown-label">Seguro Estimado</div>
          <div className="breakdown-value">{data.valSeg}</div>
        </div>

        <div className="breakdown-item">
          <div className="breakdown-label">Gastos de Escrituración</div>
          <div className="breakdown-value">{data.valEscrit}</div>
        </div>

        <div className="breakdown-item">
          <div className="breakdown-label">Cuota con Seguro</div>
          <div className="breakdown-value">{data.valEscritSeg}</div>
        </div>

        {props.withAccInit === 'yes' && (
          <>
            <div className="breakdown-item">
              <div className="breakdown-label">Cuota Inicial Total</div>
              <div className="breakdown-value">{data.valIni}</div>
            </div>
            <div className="breakdown-item">
              <div className="breakdown-label">Cuota Mensual (Inicial)</div>
              <div className="breakdown-value">{data.valMenIni}</div>
            </div>
          </>
        )}
      </div>

      <button className="btn-primary" onClick={handleSave}>
        Guardar en Historial
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    data: state.result,
    withAccInit: state.params.withAccInit,
    jCreditForm: state.jCreditForm,
    jAddValues: state.jAddValues,
    params: state.params
  }
}

const mapActionsToProps = {

}
export default connect(mapStateToProps, mapActionsToProps)(Results);
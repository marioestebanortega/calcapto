import React from 'react'
import { connect } from 'react-redux';


const Results = (props) =>{

  const data=props.data;
    return (<>
    <div className="inits" id="inits">
        <h1>Calculos</h1>
        <table className="tableData">
        <tbody>
          <tr>
            <th colSpan="2">Crédito hipotecario</th>
          </tr>
          <tr>
            <td>Valor del crédito</td>
    <td className="vcRight">{data.valCredit}</td>
          </tr>
          <tr>
            <td>Valor de la cuota</td>
            <td className="vcRight">{data.valAcc}</td>
          </tr>
          <tr>
            <th colSpan="2">Cuota inicial</th>
          </tr>
          <tr>
            <td>Valor cuota inicial</td>
            <td className="vcRight">{data.valIni}</td>
          </tr>
          <tr>
            <td>Cantidad de meses de la cuota inicial</td>
            <td className="vcRight">{data.valMIni}</td>
          </tr>
          <tr>
            <td>Cuota mensual de la inicial</td>
            <td className="vcRight">{data.valMenIni}</td>
          </tr>
          <tr>
            <th colSpan="2">Escrituras</th>
          </tr>
          <tr>
            <td>Valor estimado de las escrituras</td>
            <td className="vcRight">{data.valEscrit}</td>
          </tr>
          <tr>
            <td>Valor estimado del seguro</td>
            <td className="vcRight">{data.valSeg}</td>
          </tr>
          <tr>
            <td>Valor cuota con seguro</td>
            <td className="vcRight">{data.valEscritSeg}</td>
          </tr>
          </tbody>
        </table>
      </div>
      </>
    )
}

const mapStateToProps=(state)=>{

  return {
    data:state.result
  }
}

const mapActionsToProps={

}
export default connect(mapStateToProps,mapActionsToProps) (Results);
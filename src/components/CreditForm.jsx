import React,{useState,useEffect} from 'react'
import initData from '../services/initVals.json'

const CreditForm =()=>{
  const [formCreditForm,setFormCreditForm] = useState(initData.jCreditForm);


const onChangeFormCredit=(e)=>{

setFormCreditForm({...formCreditForm, [e.target.id]:e.target.value});
}

console.log(formCreditForm);
    return ( <div className="inits">
    <h1>Datos</h1>
    <label htmlFor="vPropertie">Valor del inmueble</label>
    <input type="text" id="vProperties" value={formCreditForm.vProperties} onChange={onChangeFormCredit} placeholder="$400.000.000.00" />

    <label htmlFor="nMonths">Numero de meses</label>
    <input type="text" id="nMonths" value={formCreditForm.nMonths} onChange={onChangeFormCredit} placeholder="5"/>
    <label htmlFor="nRateAn">Tasa anual</label>
    <input type="text" id="nRateAn" value={formCreditForm.nRateAn} onChange={onChangeFormCredit} placeholder="12%" />
    <hr/>

    <label htmlFor="tIntRate">Porcentaje cuota inicial</label>
    <input type="text" id="tIntRate"   value={formCreditForm.tIntRate} onChange={onChangeFormCredit} placeholder="30%" />

    <label htmlFor="nNMonths">Meses cuota inicial</label>
    <input type="text" id="nNMonths"  value={formCreditForm.nNMonths} onChange={onChangeFormCredit} placeholder="20" />


  </div>)
}

export default CreditForm;
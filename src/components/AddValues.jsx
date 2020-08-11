import React,{useState,useEffect} from "react";
import initData from '../services/initVals.json'

const AddValues = () => {
    const [formAddForm,setFormAddForm] = useState(initData.jAddValues);

    const onChangeFormCredit=(e)=>{
    setFormAddForm({...formAddForm, [e.target.id]:e.target.value});
    }

  
  return (
    <div className="inits">
      <h1>Abonos</h1>
      <label htmlFor="addCredit">Abono crédito</label>
      <input type="text" id="addCredit" placeholder="$0"  value={formAddForm.addCredit} onChange={onChangeFormCredit}/>

      <label htmlFor="addIni">Abono cuota inicial</label>
      <input type="text" id="addIni" placeholder="$0"  value={formAddForm.addIni} onChange={onChangeFormCredit} />
    </div>
  );
};

export default AddValues;

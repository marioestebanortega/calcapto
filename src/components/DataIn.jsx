import React,{useState} from "react";
import "../assets/styles/components/DataIn.scss";
import Results from "./Results";
import CreditForm from "./CreditForm";
import AddValues from "./AddValues";



const DataIn = () => {

  
  const calcVals=(e)=>{
    e.preventDefault();
 
  let result={
    valCredit:5,
    valAcc: 200,
    valIni:100,
    valMIni:130,
    valMenIni:123,
    valEscrit:456,
    valSeg:346,
    valEscritSeg:234
 }

 setFormCalcs(result);
  }

 const [formCals,setFormCalcs]=useState({});
  return (
    <section className="DataIn">
      <div className="container">
        <form className="formData" onSubmit={calcVals}>
          <CreditForm />
          <AddValues />
          <Results data={formCals}/>
          <div className="calcs">
            <button className="calcData"  >Calcular
              </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DataIn;

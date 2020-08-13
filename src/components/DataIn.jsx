import React,{useEffect} from "react";
import "../assets/styles/components/DataIn.css";
import Results from "./Results";
import CreditForm from "./CreditForm";
import AddValues from "./AddValues";
import { connect } from "react-redux";
import {calcAllData,applyActiveLink} from '../services/calcaptoServices'
import {calcVals} from '../actions/actions'




const DataIn = (props) => {

  useEffect(()=>{
    applyActiveLink(1,3);
  },[]);
  

  //const formCals=data.result;
  const calcAll=(e)=>{

    e.preventDefault();

   const result=calcAllData(props.data);

    props.calcVals(result)
    location.href = "#inits"

  }

 //const [formCals,setFormCalcs]=useState({});
  return (
    <section className="DataIn" >
      <div className="container">
        <form className="formData" onSubmit={calcAll}>
          <CreditForm />
          <AddValues />
          <Results/>
          <div className="calcs">
            <button className="calcData"  >Calcular
              </button>
            

              <button className="icon-exec icon-calculator1"  >
              </button>
             
          </div>
        </form>
      </div>
    </section>
  );
};

const mapStateToProps=(state)=>{
  return {
    data:state
  }
}

const mapActionsToProps={
  calcVals,
}
export default connect(mapStateToProps,mapActionsToProps)(DataIn);

import React,{useState} from "react";
import "../assets/styles/components/DataIn.scss";
import Results from "./Results";
import CreditForm from "./CreditForm";
import AddValues from "./AddValues";
import { connect } from "react-redux";
import {calcAllData} from '../services/calcaptoServices'
import {calcVals} from '../actions/actions'



const DataIn = (props) => {



  //const formCals=data.result;
  const calcAll=(e)=>{

    e.preventDefault();
  
   const result=calcAllData(props.data);

    props.calcVals(result)

  }

 //const [formCals,setFormCalcs]=useState({});
  return (
    <section className="DataIn">
      <div className="container">
        <form className="formData" onSubmit={calcAll}>
          <CreditForm />
          <AddValues />
          <Results/>
          <div className="calcs">
            <button className="calcData"  >Calcular
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

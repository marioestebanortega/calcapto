import React,{useEffect} from "react";
import "../assets/styles/components/DataIn.css";
import Results from "./Results";
import CreditForm from "./CreditForm";
import AddValues from "./AddValues";
import { connect } from "react-redux";
import {calcAllData,applyActiveLink} from '../services/calcaptoServices'
import {calcVals,setVisible} from '../actions/actions'




const DataIn = (props) => {
  let visible=props.data.visible;
  const rateType=props.data.params.rateType;
  const withAccInit=props.data.params.withAccInit;
  useEffect(()=>{
    applyActiveLink(1,4);
  },[]);
  

  //const formCals=data.result;
  const calcAll=(e)=>{
    e.preventDefault();
    props.setVisible(1);
    visible=props.data.visible;
    const elementCalc=document.getElementById('icon-anim');
    elementCalc.classList.add('icon-exec-ok');
    elementCalc.classList.remove('icon-exec-anim');

   const result=calcAllData(props.data,rateType,withAccInit);

    props.calcVals(result)
    location.href = "#inits"

  }

 //const [formCals,setFormCalcs]=useState({});
  return (<>
    <section className="DataIn" >
      <div className="container">
        <form className="formData" onSubmit={calcAll}>
        <div className="calcs">
            <button className="calcData"  >Calcular
              </button>
            

              <button id="icon-anim" className="icon-exec icon-exec-anim icon-calculator1"  >
              </button>
             
          </div>
          <CreditForm />
          <AddValues />
          {visible===1&&<Results/>}
          
        </form>
      </div>
    </section>
    </>
  );
};

const mapStateToProps=(state)=>{
  return {
    data:state
  }
}

const mapActionsToProps={
  calcVals,
  setVisible
}
export default connect(mapStateToProps,mapActionsToProps)(DataIn);

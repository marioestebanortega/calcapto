import React from "react";
import "../assets/styles/components/DataIn.css";
import Results from "./Results";
import CreditForm from "./CreditForm";
import AddValues from "./AddValues";
import { connect } from "react-redux";
import { calcAllData } from '../services/calcaptoServices'
import { calcVals, setVisible } from '../actions/actions'




const DataIn = (props) => {
  let visible = props.data.visible;
  const rateType = props.data.params.rateType;
  const withAccInit = props.data.params.withAccInit;


  //const formCals=data.result;
  const calcAll = (e) => {
    e.preventDefault();
    props.setVisible(1);
    visible = props.data.visible;

    const result = calcAllData(props.data, rateType, withAccInit);

    props.calcVals(result)
    location.href = "#inits"

  }

  //const [formCals,setFormCalcs]=useState({});
  return (<>
    <section className="DataIn" >
      <div className="container">
        <form className="formData" onSubmit={calcAll}>
          <CreditForm />
          <AddValues />

          <button className="btn-primary" type="submit">
            Calcular Cuota
          </button>
        </form>
      </div>
    </section>
  </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapActionsToProps = {
  calcVals,
  setVisible
}
export default connect(mapStateToProps, mapActionsToProps)(DataIn);

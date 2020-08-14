import React, { useEffect, useState } from "react";
import {
  applyActiveLink,
  formatNumber,
  calcCuot,
  formatCurrencyVal,
} from "../services/calcaptoServices";
import "../assets/styles/components/Compare.css";
import { connect } from "react-redux";

const Compare = (props) => {
  const j = 15;
  const [tasas, setTasas] = useState([]);
  const [meses, setMeses] = useState([]);
  const [cuotas, setCuotas] = useState(new Array(j));
  const [interes, setInteres] = useState(new Array(j));
  const [pInteres, setPInteres] = useState(new Array(j));


  const valCredit = formatNumber(props.data.result.valCredit);
  const valAbonoC = props.data.jAddValues.addCredit;
  const rateIni = props.data.jCreditForm.nRateAn;
  const monthIni = props.data.jCreditForm.nMonths;
  const vCoutIni = formatNumber(props.data.result.valAcc);
  const pRateIni = vCoutIni * monthIni - valCredit;
  let pInicial = props.data.jCreditForm.tIntRate;
  const tipRate = props.data.params.rateType;
  const withAccInit = props.data.params.withAccInit;
  if (withAccInit === "no") {
    pInicial = 0;
  }
  let tasaIni=0;
  if(tipRate==='month'){
    tasaIni=1;
 }
 else{
  tasaIni=12;
 }

 const [formConfig, setFormConfig] = useState({
  vTasa: tasaIni,
  vMeses: 180,
});

  const calcTasa=(tipRate,i)=>
  {
    if(tipRate==='month'){
       return (0.8 + i / 5).toFixed(2);
    }
    else{
      return (5 + i ).toFixed(2);
    }
  }

  useEffect(() => {
    applyActiveLink(2, 4);
    const ts = new Array(j);
    const ms = new Array(j);
    const cuotasC = new Array(j);
    const interesC = new Array(j);
    const pInteresC = new Array(j);
    for (let i = 0; i < j; i++) {
      ts[i] = calcTasa(tipRate,i);
      ms[i] = 60 + 10 * i;
      cuotasC[i] = calcCuot(
        ts[i],
        ms[i],
        pInicial,
        valCredit,
        valAbonoC,
        tipRate
      );
      interesC[i] = cuotasC[i] * ms[i] - valCredit;
      pInteresC[i] = Math.round((100 * interesC[i]) / valCredit);

      cuotasC[i] = formatCurrencyVal(cuotasC[i]);
      interesC[i] = formatCurrencyVal(interesC[i]);
    }
    setTasas(ts);
    setMeses(ms);
    setCuotas(cuotasC);
    setInteres(interesC);
    setPInteres(pInteresC);
  }, []);

  const onChangeConfig = (e) => {

    setFormConfig({ ...formConfig, [e.target.id]: e.target.value });
  };



  const putTasasAllGeneric = (e, val) => {
    const cuotasC = [...cuotas];
    const interesC = [...interes];
    const pInteresC = [...pInteres];
    const ts = [...tasas];
    for (let i = 0; i < j; i++) {
      ts[i] = val?val:calcTasa(tipRate,i);
      cuotasC[i] = calcCuot(
        ts[i],
        meses[i],
        pInicial,
        valCredit,
        valAbonoC,
        tipRate
      );
      interesC[i] = cuotasC[i] * meses[i] - valCredit;
      pInteresC[i] = Math.round((100 * interesC[i]) / valCredit);

      const element = document.getElementById("inputRat" + i);
      element.value = ts[i];

      cuotasC[i] = formatCurrencyVal(cuotasC[i]);
      interesC[i] = formatCurrencyVal(interesC[i]);
    }
    setTasas(ts);
    setCuotas(cuotasC);
    setInteres(interesC);
    setPInteres(pInteresC);
  };

  const putTasasAll = (e) => {

    putTasasAllGeneric(e, formConfig.vTasa);
  };

  const putTasasAllAl = (e) => {
    putTasasAllGeneric(e);
  };

  const putMesesAllGeneric = (e, val) => {
    const cuotasC = [...cuotas];
    const interesC = [...interes];
    const pInteresC = [...pInteres];
    const ms = [...meses];

    for (let i = 0; i < j; i++) {

      ms[i] = val ? val : 60 + 10 * i;
      const element = document.getElementById("inputMon" + i);
      element.value = ms[i];

      cuotasC[i] = calcCuot(
        tasas[i],
        ms[i],
        pInicial,
        valCredit,
        valAbonoC,
        tipRate
      );
      interesC[i] = cuotasC[i] * ms[i] - valCredit;
      pInteresC[i] = Math.round((100 * interesC[i]) / valCredit);

      cuotasC[i] = formatCurrencyVal(cuotasC[i]);
      interesC[i] = formatCurrencyVal(interesC[i]);
    }

    setMeses(ms);
    setCuotas(cuotasC);
    setInteres(interesC);
    setPInteres(pInteresC);
  };

  const putMesesAll = (e) => {
    putMesesAllGeneric(e, formConfig.vMeses);
  };
  const putMesesAllAl = (e) => {
    putMesesAllGeneric(e);
  };

  const eventChange = (e) => {
    try {
      const element = e.target.id.substring(0, 8);
      const cuotasC = [...cuotas];
      const tasasC = [...tasas];
      const mesesC = [...meses];
      const interesC = [...interes];
      const pInteresC = [...pInteres];
      const id = Number.parseInt(e.target.id.substring(8, 9));
      if (element === "inputRat") {

        tasasC[id] = e.target.value;
        setTasas(tasasC);
      } else if (element === "inputMon") {
        mesesC[id] = Math.round(e.target.value);
        setMeses(mesesC);
      }

      cuotasC[id] = calcCuot(
        tasasC[id],
        mesesC[id],
        pInicial,
        valCredit,
        valAbonoC,
        tipRate
      );
      interesC[id] = cuotasC[id] * mesesC[id] - valCredit;
      pInteresC[id] = Math.round((100 * interesC[id]) / valCredit);
      interesC[id] = formatCurrencyVal(interesC[id]);
      cuotasC[id] = formatCurrencyVal(cuotasC[id]);

      setCuotas(cuotasC);
      setInteres(interesC);
    } catch (e) {
      console.log("error--->", e);
    }
  };
  return (
    <>
      {valCredit ? (
        <section className="compare">
          <div className="container">
            <div className="setData">
              <div className="formSets">
                <h1>Configurar datos</h1>
                <div className="ingress">
                  <label htmlFor="vTasa">Tasa</label>
                  <input defaultValue={tasaIni} type="text" id="vTasa" onChange={onChangeConfig} />
                </div>
                <div className="ingress">
                  <button onClick={putTasasAll}>Tasa estatica</button>
                  <button onClick={putTasasAllAl}>Tasa aleatoria</button>
                </div>
                <div className="ingress">
                  <label htmlFor="vMeses">Meses</label>
                  <input defaultValue={180} type="text" id="vMeses" onChange={onChangeConfig} />
                </div>
                <div className="ingress">
                  <button onClick={putMesesAll}>Meses estaticos</button>
                  <button onClick={putMesesAllAl}>Meses aleatorio</button>
                </div>
              </div>
            </div>
            <table className="compareTable">
              <tbody>
                <tr>
                  <th colSpan="6">
                    <h2>{`Valor crédito: ${formatCurrencyVal(valCredit)}`}</h2>
                  </th>
                </tr>
                <tr>
                  <th colSpan="2">
                    <h2>{`Valor cuota: ${formatCurrencyVal(vCoutIni)}`}</h2>
                  </th>

                  <th colSpan="2">
                    <h2>
                      {tipRate === "month" ? "Tasa Mensual" : "Tasa Anual"}
                      {` ${rateIni}%`}
                    </h2>
                  </th>

                  <th colSpan="2">
                    <h2>
                      {"Meses del credito: "}
                      {monthIni}
                    </h2>
                  </th>
                </tr>

                <tr>
                  <th colSpan="1">
                    <h4 className="titles-table">Opción</h4>
                  </th>
                  <th colSpan="1">
                    <h4>Tasa</h4>
                  </th>
                  <th colSpan="1">
                    <h4>Meses</h4>
                  </th>
                  <th colSpan="1">
                    <h4>Cuota</h4>
                  </th>
                  <th colSpan="1">
                    <h4>Pago a intereses</h4>
                  </th>
                  <th colSpan="1">
                    <h4>Ahorro</h4>
                  </th>
                </tr>

                {tasas.map((tasa, i) => {
                  return (
                    <tr key={i} className="dataRow">
                      <td>{i + 1}</td>
                      <td>
                        <input
                          id={`inputRat${i}`}
                          onChange={eventChange}
                          className="input-10"
                          type="text"
                          defaultValue={isNaN(tasas[i]) === true ? 0 : tasas[i]}
                        />
                      </td>
                      <td>
                        <input
                          id={`inputMon${i}`}
                          onChange={eventChange}
                          className="input-10"
                          type="text"
                          defaultValue={isNaN(meses[i]) === true ? 0 : meses[i]}
                        />
                      </td>
                      <td>
                        <label className="input-15" htmlFor="vPropertie">
                          {"$"}
                          {cuotas[i]}
                        </label>
                      </td>
                      <td>
                        <label className="input-15" htmlFor="vPropertie">
                          {`$${interes[i]} (${pInteres[i]}%)`}
                        </label>
                      </td>
                      <td>
                        <label className="input-15" htmlFor="vPropertie">
                          {pRateIni - formatNumber(interes[i]) > 0
                            ? "$" +
                              formatCurrencyVal(
                                pRateIni - formatNumber(interes[i])
                              )
                            : "No se ahorra"}
                        </label>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      ) : (
        <h1>Aun no se han hecho los calculos</h1>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};
const mapActionsToProps = {};
export default connect(mapStateToProps, mapActionsToProps)(Compare);

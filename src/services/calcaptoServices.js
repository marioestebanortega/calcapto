

export const calcCuot = (tasa, nMeses, pCuotaInicial, vApartamento, vAbono,rateType) => {
    let valorCredito = obtenerValorCredito(pCuotaInicial, formatNumber(vApartamento), formatNumber(vAbono));
    let i=0;
    if(rateType==='anual'){
        i = tasa / 1200;
    }
    else{
        i = tasa/100;
    }
    let comun = Math.pow(1 + i, Math.round(formatNumber(nMeses)));
    let numerador = valorCredito * comun * i;
    let denominador = comun - 1;
    let cuota = Math.round(numerador / denominador);
    return cuota;
};
export const obtenerValorCredito = (pCuotaInicial, vApartamento, vAbono) => {
    let pCredito = 100 - pCuotaInicial;
    let valorCredito = formatNumber(vApartamento) * pCredito / 100 - formatNumber(vAbono);
    return Math.round(valorCredito);
};



export const calcEscr = (val) => {
    return Math.round(formatNumber(val) * 2.2 / 100);
}

export const calcSeg = (val) => {
    return Math.round(formatNumber(val) * 0.1 / 100);
}

export const calcAllData = (data,rateType,withAccInit) => {
    const valAdds = data.jAddValues;
    const valCredVals = data.jCreditForm;
    let pCuotaInicial=valCredVals.tIntRate;
    if(withAccInit==='no'){
        pCuotaInicial=0;
    }
    const valCredit = obtenerValorCredito(pCuotaInicial, valCredVals.vProperties, valAdds.addCredit);
    const valCuota = calcCuot(valCredVals.nRateAn, valCredVals.nMonths, pCuotaInicial, valCredVals.vProperties, valAdds.addCredit,rateType,withAccInit);
    const vIni = Math.round(formatNumber(valCredVals.vProperties) * pCuotaInicial / 100 - formatNumber(valAdds.addIni));
    const valEscr = calcEscr(valCredit);
    const vSeg = calcSeg(valCredit);
    const result = {
        ...data.result,
        valCredit: formatCurrencyVal(valCredit),
        valAcc: formatCurrencyVal(valCuota),
        valIni: formatCurrencyVal(vIni),
        valMIni: valCredVals.nNMonths,
        valMenIni: formatCurrencyVal(formatNumber(Math.round(vIni / valCredVals.nNMonths))),
        valEscrit: formatCurrencyVal(valEscr),
        valSeg: formatCurrencyVal(vSeg),
        valEscritSeg: formatCurrencyVal(valCuota + vSeg)
    }
    return result;
}




export const formatCurrencyVal = (n) => {

    return (n + "").replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")

};

export const applyActiveLink=(n,cant)=>{
    for(let i=1;i<=cant;i++){
        let elementCalc=document.getElementById('elementCalc'+i);
        if(i===n){
            elementCalc.classList.add('active-link');
        }
        else{
            elementCalc.classList.remove('active-link');
        }
    }
   
}


export const formatNumber = (n) => {

    // format number 1000000 to 1,234,567
    const num = (n + "").replace(/[\D\s\._\-]+/g, "")
    const input = num ? parseInt(num, 10) : 0;
    return input;


}

export const genericEvent=(e)=>{
    const val=formatNumber(e.target.value);

    const element=document.getElementById(e.target.id);
    element.value=formatCurrencyVal(val+"");
}


export const onMoveSwitchAddChar=(e,id,prop1,prop2,fun)=>{
    const element = document.body.querySelector( `#${id} .switch-base .switch-circle`);
    if(element.classList.contains("swith-move")){
      element.classList.remove("swith-move");
      fun(prop1)
    }
    else{
      element.classList.add("swith-move");
      fun(prop2)
    }
    
  }

export const cleanResults=(props)=>{
    props.setVisible(0);
    const elementCalc=document.getElementById('icon-anim');
    elementCalc.classList.remove('icon-exec-ok');
    elementCalc.classList.add('icon-exec-anim');

}

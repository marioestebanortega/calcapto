

export const calcCuot = (tasa, nMeses, pCuotaInicial, vApartamento, vAbono) => {
    let valorCredito = obtenerValorCredito(formatNumber(pCuotaInicial), formatNumber(vApartamento), formatNumber(vAbono));
    let i = formatNumber(tasa) / 1200;
    let comun = Math.pow(1 + i, formatNumber(nMeses));
    let numerador = valorCredito * comun * i;
    let denominador = comun - 1;
    let cuota = Math.round(numerador / denominador);
    return cuota;
};
export const obtenerValorCredito = (pCuotaInicial, vApartamento, vAbono) => {
    let pCredito = 100 - formatNumber(pCuotaInicial);
    let valorCredito = formatNumber(vApartamento) * formatNumber(pCredito) / 100 - formatNumber(vAbono);
    return Math.round(valorCredito);
};



export const calcEscr = (val) => {
    return Math.round(formatNumber(val) * 2.2 / 100);
}

export const calcSeg = (val) => {
    return Math.round(formatNumber(val) * 0.1 / 100);
}

export const calcAllData = (data) => {
    const valAdds = data.jAddValues;
    const valCredVals = data.jCreditForm;
    const valCredit = obtenerValorCredito(valCredVals.tIntRate, valCredVals.vProperties, valAdds.addCredit);
    const valCuota = calcCuot(valCredVals.nRateAn, valCredVals.nMonths, valCredVals.tIntRate, valCredVals.vProperties, valAdds.addCredit);
    const vIni = Math.round(formatNumber(valCredVals.vProperties) * formatNumber(valCredVals.tIntRate) / 100 - formatNumber(valAdds.addIni));
    const valEscr = calcEscr(valCredit);
    const vSeg = calcSeg(valCredit);
    const result = {
        ...data.result,
        valCredit: formatCurrencyVal(valCredit),
        valAcc: formatCurrencyVal(valCuota),
        valIni: formatCurrencyVal(vIni),
        valMIni: valCredVals.nNMonths,
        valMenIni: formatCurrencyVal(vIni / formatNumber(valCredVals.nNMonths)),
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




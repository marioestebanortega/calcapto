
export const calcCuot = (tasa,nMeses,pCuotaInicial,vApartamento,vAbono) => {
    let valorCredito = obtenerValorCredito(pCuotaInicial,vApartamento,vAbono);
    let i = tasa / 1200;
    let comun = Math.pow(1 + i, nMeses);
    let numerador = valorCredito * comun * i;
    let denominador = comun - 1;
    let cuota = numerador / denominador;
    return cuota;
};
export const obtenerValorCredito = (pCuotaInicial,vApartamento,vAbono) => {
    let pCredito = 100 - pCuotaInicial;
    let valorCredito = vApartamento * pCredito / 100 - vAbono;
    return valorCredito;
};

export const formatCurrencyVal= (num)=> {
    if(isNaN(num))return '$0';
    return '$'+num.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  };

export const calcEscr=(val)=>{
    return val*2.2/100;
} 

export const calcSeg=(val)=>{
    return val*0.1/100;
}  

export const calcAllData=(data)=>{
    const valAdds=data.jAddValues;
    const valCredVals=data.jCreditForm;  
    const valCredit=obtenerValorCredito(valCredVals.tIntRate,valCredVals.vProperties,valAdds.addCredit);
    const valCuota=calcCuot(valCredVals.nRateAn,valCredVals.nMonths,valCredVals.tIntRate,valCredVals.vProperties,valAdds.addCredit);
    const vIni=valCredVals.vProperties*valCredVals.nRateAn/100-valAdds.addIni;
    const valEscr=calcEscr(valCredit);
    const vSeg=calcSeg(valCredit);
    const result={...data.result,
      valCredit: formatCurrencyVal(valCredit),
      valAcc:formatCurrencyVal(valCuota),
      valIni:formatCurrencyVal(vIni),
      valMIni:valCredVals.nNMonths,
      valMenIni:formatCurrencyVal(vIni/valCredVals.nNMonths),
      valEscrit:formatCurrencyVal(valEscr),
      valSeg:formatCurrencyVal(vSeg),
      valEscritSeg: formatCurrencyVal(valCuota+vSeg)
    }
    return result;
}


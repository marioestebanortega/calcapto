
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

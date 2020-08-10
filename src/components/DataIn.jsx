import React from 'react'
import '../assets/styles/components/DataIn.scss'

const DataIn=()=>{
return  (
<section className="DataIn">
    <div className="container">
<form className="formData" action="/action_page.php">    
<div className="inits">
    <h1>Datos</h1>
<label for="vPropertie">Valor del inmueble</label>
<input type="text" id="vPropertie" placeholder="Your name.."/>

<label for="nMonths">Numero de meses</label>
<input type="text" id="nMonths"  placeholder="Your last name.."/>

<label for="pInitAccount">Porcentaje cuota inicial</label>
<input type="text" id="pInitAccount"  placeholder="Your last name.."/>

<label for="tIntRate">Porcentaje cuota inicial</label>
<input type="text" id="tIntRate"  placeholder="Your last name.."/>

<label for="nNMonths">Meses cuota inicial</label>
<input type="text" id="nNMonths"  placeholder="Your last name.."/>

<label for="nNMonths">Meses cuota inicial</label>
<input type="text" id="nNMonths"  placeholder="Your last name.."/>
</div>

<div className="inits">
<h1>Abonos</h1>
<label for="addCredit">Abono crédito</label>
<input type="text" id="addCredit"  placeholder="Your last name.."/>

<label for="addIni">Abono cuota inicial</label>
<input type="text" id="addIni"  placeholder="Your last name.."/>
</div>

<div className="calcs">
<input className="calcData" type="submit" value="Calcular"/>
</div>
</form>
</div>
</section>)
}

export default DataIn;
import React from 'react'
import '../assets/styles/components/Footer.scss'
import logo from '../assets/images/logoSinNombre.png'


const Footer = ()=>{
    return (
        <>
       <footer className="footer" id="footerPage">
    <div className="container">
      <div className="footer-first">
        <p>
        <strong><b>CALCAPTO 1.0</b></strong> Copyright © Todos los derechos reservados
          <img
           src={logo}
            alt="" /></p>
    
      </div>
      <div className="footer-second">
        <p>
          Implementado por <strong><b>Mario Ortega. </b></strong>
        </p>
      </div>
    </div>
  </footer>
        </>
    )
}

export default Footer;
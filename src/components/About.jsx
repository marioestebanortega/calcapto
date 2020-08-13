import React,{useEffect} from 'react'
import '../assets/styles/components/About.css'
//import hero from '../assets/images/Hero.jpg'
import {applyActiveLink} from '../services/calcaptoServices'


const About =()=>{
  useEffect(()=>{
    applyActiveLink(2,3);
  },[]);

return <section className="about-personal-data">
<div className="hero-card">


  <img
           
            src="/public/images/hero.jpg"
            alt="Imagen principal del sitio"
          />

  <div className="hero-detail">
    <h4><b>Mario Esteban Ortega Garcés</b></h4>
    <p>CTO CALCAPTO Company</p>
    <p>Soluciones en tecnología de software</p>
  </div>
</div>
</section>

}


export default About;
import React,{useEffect} from 'react'
import '../assets/styles/components/About.scss'
import hero from '../assets/images/Hero.jpg'
import {applyActiveLink} from '../services/calcaptoServices'


const About =()=>{
  useEffect(()=>{
    applyActiveLink(2,3);
  },[]);

return <section className="about-personal-data">
<div className="hero-card">
  <img src={hero}/>
  <div className="hero-detail">
    <h4><b>Mario Esteban Ortega Garcés</b></h4>
    <p>CTO Abba Consoulting Group</p>
    <p>Soluciones en tecnología de software</p>
  </div>
</div>
</section>

}


export default About;
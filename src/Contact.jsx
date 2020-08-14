import React,{useEffect} from 'react'
import './assets/styles/components/Contact.css'
import {applyActiveLink} from './services/calcaptoServices'


const Contact = () =>{
    useEffect(()=>{
        applyActiveLink(4,4);
      },[]);
return(
    <section className="contact">
        <div className="container">
        <div className="contact-detail">
            <h3>Mail: mario.esteban.ortega@gmail.com</h3>
            <a target="_blank" href="https://www.linkedin.com/in/maes0186/">LinkedIn: https://www.linkedin.com/in/maes0186/</a>
            <a target="_blank" href="https://marioestebanortega.github.io/portafolio/">Portafolio: https://marioestebanortega.github.io/portafolio/</a>
        </div>
        </div>
    </section>
)
}


export default Contact;
import React from 'react'
import '../assets/styles/components/Header.scss'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'



const Header =()=>{
    return( 
    <section className="header">
        <div className="container">
        <div className="imgContainer">
        <img src={logo}></img>
        </div>
        <nav className="menu">
        <ol>
            <li>
                <Link className="option" to="/">
                Cálculos
                </Link>
          
                </li>
                <li>
                <Link className="option" to="/about">
               Nosotros
                </Link>
                </li> 
                <li>
                <Link className="option" to="/contact">
               Contáctanos
                </Link>
                </li>    
        </ol>
        </nav>
        </div>
    </section>
    )
}

export default Header;
import React from 'react'
import '../assets/styles/components/Header.scss'
import { Link } from 'react-router-dom'



const Header =()=>{


    return( 
    <section className="header">
        <div className="container">
        <div className="imgContainer">
        <div className="logo-image">
        <h1>CALCAPTO</h1>
        </div>
        </div>
        <nav className="menu">
        <ol>
            <li>
                <Link id="elementCalc1" className="option" to="/">
                Cálculos
                </Link>
          
                </li>
                <li>
                <Link id="elementCalc2" className="option" to="/about">
               Nosotros
                </Link>
                </li> 
                <li>
                <Link id="elementCalc3" className="option" to="/contact">
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
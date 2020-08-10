import React from 'react'
import '../assets/styles/components/Header.scss'
import logo from '../assets/images/logo.png'



const Header =()=>{
    return( 
    <section className="header">
        <div class="container">
        <div className="imgContainer">
        <img src={logo}></img>
        </div>
        <nav className="menu">
        <ol>
            <li>
                <a className="option" href="#">Datos iniales</a>
                </li>
                <li>
                <a className="option" href="#">Acerca de nosotros</a>
                </li>    
        </ol>
        </nav>
        </div>
    </section>
    )
}

export default Header;
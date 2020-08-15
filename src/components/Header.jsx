import React,{useEffect} from 'react'
import '../assets/styles/components/Header.css'
import { Link } from 'react-router-dom'
import {execMenu} from './menuactions.js'
import { connect } from 'react-redux'



const Header =(props)=>{

    useEffect(()=>{
        execMenu();
    },[])
    return( <>
        <i className="icon-menu burger-button" id="burger-menu"></i>
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
                <Link id="elementCalc1" className="option" to="">
                Cálculos
                </Link>
          
                </li>
                <li className={props.data.result.valCredit?'':'hide-link'}>
                <Link id="elementCalc2" className="option" to="/compare">
                Comparar
                </Link>
          
                </li>
                <li>
                <Link id="elementCalc3" className="option" to="/about">
               Nosotros
                </Link>
                </li> 
                <li>
                <Link id="elementCalc4" className="option" to="/contact">
               Contáctanos
                </Link>
                </li>    
        </ol>
        </nav>
        </div>
    </section>
    </>
    )
}
const mapPropsToState=(state)=>{
    return{
        data:state
    }
}
const mapActionsToState={}
export default connect(mapPropsToState,mapActionsToState)(Header);
import React from 'react'
import '../assets/styles/components/Header.css'
import { connect } from 'react-redux'



const Header = (props) => {
    return (<>
        <section className="header">
            <div className="container">
                <div className="imgContainer">
                    <div className="logo-image">
                        <h1>CALCAPTO</h1>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
const mapPropsToState = (state) => {
    return {
        data: state
    }
}
const mapActionsToState = {}
export default connect(mapPropsToState, mapActionsToState)(Header);
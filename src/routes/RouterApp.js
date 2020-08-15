import React from 'react'
import {BrowserRouter, Route, Switch, Redirect, HashRouter} from 'react-router-dom'
import App from '../App';
import NotFound from '../NotFound';
import Layout from '../Layout/Layout';
import About from '../components/About';
import Contact from '../Contact';
import Compare from '../components/Compare';



const RouterApp=()=>{
return (
    <BrowserRouter>
    <Layout>
    <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/compare" component={Compare}  />
    <Route exact path="/about" component={About}  />
    <Route exact path="/contact" component={Contact}/>
    <Route component={NotFound}/>
    </Switch>
    </Layout>
    </BrowserRouter>
)
}

export default RouterApp;
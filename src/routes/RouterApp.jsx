import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App';
import NotFound from '../NotFound';
import Layout from '../Layout/Layout';
import About from '../components/About';
import Contact from '../Contact';
import Compare from '../components/Compare';



const RouterApp = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/compare" element={<Compare />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default RouterApp;
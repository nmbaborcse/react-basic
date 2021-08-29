import React from 'react'
import Header from './_partials/Header'
import Footer from './_partials/Footer'
import Router from './Router/Router'
export default function Layout(props) {
    return (
        <>
             <Header />

            <div className="main-content" style={{padding:'50px'}}>
               <Router />   
            </div>

            <Footer />
        </>
    )
}

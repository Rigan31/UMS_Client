import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegPage from './components/pages/RegPage'
import ProfilePage from './components/pages/ProfilePage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import './App.css'


var logged_in = ""

export default function App() {


    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={ <LoginPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/logout" element={ <LoginPage/> } />
                    <Route path="/reg" element={ <RegPage/> } />
                    <Route path="/profile" element={ <ProfilePage/> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                </Routes>
                
            
        </BrowserRouter>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by <a href="https://izemspot.netlify.com" target="_blank" rel="noopener noreferrer">IZEMSPOT</a></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}

export {
    logged_in
}